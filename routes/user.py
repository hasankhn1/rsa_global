from datetime import timedelta
from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from controllers.user import create_user_controller, login_user_controller
from db import SessionLocal
from schemas.user import AccessTokenResponse, LoginRequest, UserRequestSchema
from models.user import User
from passlib.context import CryptContext


router = APIRouter(tags=["auth"])
bcrypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


dependency_db = Annotated[Session, Depends(get_db)]


@router.post("/register", response_model=AccessTokenResponse)
async def create_user(db: dependency_db, request_data: UserRequestSchema):
    return await create_user_controller(db, request_data)


@router.post("/login", response_model=AccessTokenResponse)
async def authenticate_user(db: dependency_db, request_data: LoginRequest):
    return await login_user_controller(db, request_data)
