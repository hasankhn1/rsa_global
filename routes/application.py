import os
from typing import Annotated, Any, List
from fastapi import APIRouter, Depends, File, Form, UploadFile
from sqlalchemy.orm import Session
from controllers.application import create_application_controller, get_all_application_controller
from db import SessionLocal
from schemas.application import ApplicationRequestSchema, ApplicationResponseSchema
from models.user import User
from passlib.context import CryptContext

from schemas.application_form import ApplicationCreateForm
from security.security import get_current_user

UPLOAD_DIR = "uploads/resumes"
os.makedirs(UPLOAD_DIR, exist_ok=True)


router = APIRouter(tags=["application"])
bcrypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


dependency_db = Annotated[Session, Depends(get_db)]
user_dependency = Annotated[dict, Depends(get_current_user)]


@router.post("/application", response_model=Any)
async def create_application(
    db:dependency_db,
    user:user_dependency,
    form_data: ApplicationCreateForm = Depends(),
):
    result = await create_application_controller(db, user, form_data)
    return result

@router.get("/application", response_model=List[ApplicationResponseSchema])
async def get_all_applications(db: dependency_db, user: user_dependency):
    return await get_all_application_controller(db, user)