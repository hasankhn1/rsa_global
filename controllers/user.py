from datetime import timedelta
from fastapi import APIRouter, HTTPException, status
from models.user import User
from passlib.context import CryptContext

from security.security import create_access_token

router = APIRouter(tags=["auth"])

bcrypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


async def create_user_controller(db, request_data):
    try:
        user_data = User(
            first_name=request_data.first_name,
            last_name=request_data.last_name,
            email=request_data.email,
            username=request_data.username,
            is_active=True,
            hashed_password=bcrypt_context.hash(request_data.hashed_password),
        )
        db.add(user_data)
        db.commit()
        token = create_access_token(
            user_data.username, user_data.id, timedelta(hours=20)
        )
        return token
    except:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Could not create user"
        )


async def login_user_controller(db, request_data):
    user_data = db.query(User).filter_by(username=request_data.username).first()
    if user_data is None:
        raise HTTPException(status_code=404, detail="No user found")
    if not bcrypt_context.verify(request_data.password, user_data.hashed_password):
        raise HTTPException(status_code=401, detail="Incorrect password")
    token = create_access_token(user_data.username, user_data.id, timedelta(hours=20))
    return token
