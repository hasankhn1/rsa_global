

from datetime import timedelta, datetime, timezone
from typing import Annotated, List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import Column
from sqlalchemy.orm import Session
from db import SessionLocal
from schemas.user import AccessTokenResponse, LoginRequest, UserRequestSchema, UserSchema
from models.user import User
from passlib.context import CryptContext
from jose import jwt, JWTError;
from fastapi.security import OAuth2PasswordBearer

router = APIRouter(tags=['auth']);

SECRET_KEY = '4kPKsTmf3WZWAwQUNMrVdYzIoWCB7SoMF6D-cAD75qK_r3s0TkVXz3PYw6idjBiR'
ALOGORITHM = 'HS256'
OAUTH2_BEARER = OAuth2PasswordBearer(tokenUrl='auth/token')

bcrypt_context = CryptContext(schemes=['bcrypt'], deprecated='auto')

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

dependency_db = Annotated[Session , Depends(get_db)]

    

@router.post('/register', response_model=AccessTokenResponse)
async def create_user(db: dependency_db, request_data: UserRequestSchema):
    try:
        user_data = User(
            first_name= request_data.first_name,
            last_name= request_data.last_name,
            email= request_data.email,
            username= request_data.username,
            is_active= True,
            hashed_password= bcrypt_context.hash(request_data.hashed_password),
            )
        db.add(user_data)
        db.commit()
        token = create_access_token(user_data.username, user_data.id, timedelta(minutes=20))
        return token;
    except:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Could not create user')

@router.post('/login', response_model=AccessTokenResponse)
async def authenticate_user(db: dependency_db, request_data: LoginRequest):
    user_data = db.query(User).filter_by(username=request_data.username).first()
    print(user_data);
    if user_data is None:
        raise HTTPException(status_code=404, detail='No user found')
    if not bcrypt_context.verify(request_data.password, user_data.hashed_password):
        raise HTTPException(status_code=401, detail='Incorrect password')
    token = create_access_token(user_data.username, user_data.id, timedelta(minutes=20))
    return token;


def create_access_token(username:Column[str], id: Column[int], expires_delta: timedelta) -> AccessTokenResponse:
    encode = {'sub': username, 'id': id}
    expires = datetime.now(timezone.utc) + expires_delta
    encode.update({'exp': expires})
    token = jwt.encode(encode, SECRET_KEY, algorithm=ALOGORITHM)
    return AccessTokenResponse(access='Bearer', token=token)


async def get_current_user(token: Annotated[str, Depends(OAUTH2_BEARER)]):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALOGORITHM])  # ← Fix typo
        username: str = payload.get('sub', None)
        id: str = payload.get('id', None)
        print(username, id);
        if username is None or id is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail='User not found'
            )
        return {'username': username, 'id': id}
    except JWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Could not validate user')