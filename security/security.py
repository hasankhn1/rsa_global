from datetime import timedelta, datetime, timezone
from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import Column
from sqlalchemy.orm import Session
from db import SessionLocal
from schemas.user import (
    AccessTokenResponse,
)
from models.user import User
from passlib.context import CryptContext
from jose import jwt, JWTError
from fastapi.security import OAuth2PasswordBearer

router = APIRouter(tags=["auth"])

SECRET_KEY = "4kPKsTmf3WZWAwQUNMrVdYzIoWCB7SoMF6D-cAD75qK_r3s0TkVXz3PYw6idjBiR"
ALOGORITHM = "HS256"
OAUTH2_BEARER = OAuth2PasswordBearer(tokenUrl="auth/token")

bcrypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


dependency_db = Annotated[Session, Depends(get_db)]

def create_access_token(
    username: Column[str], id: Column[int], expires_delta: timedelta
) -> AccessTokenResponse:
    encode = {"sub": username, "id": id}
    expires = datetime.now(timezone.utc) + expires_delta
    encode.update({"exp": expires})
    token = jwt.encode(encode, SECRET_KEY, algorithm=ALOGORITHM)
    return AccessTokenResponse(access="Bearer", token=token)


async def get_current_user(token: Annotated[str, Depends(OAUTH2_BEARER)]):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALOGORITHM])  # ← Fix typo
        username: str = payload.get("sub", None)
        id: str = payload.get("id", None)
        if username is None or id is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED, detail="User not found"
            )
        return {"username": username, "id": id}
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Could not validate user"
        )
