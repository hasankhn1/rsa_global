from datetime import datetime
from pydantic import BaseModel, EmailStr
from typing import Optional

    

class UserSchema(BaseModel):
    id: int | None
    email: EmailStr
    username: str
    first_name: str
    last_name: str
    hashed_password: str
    is_active: bool
    created_at: datetime | None
    updated_at: datetime| None

class UserRequestSchema(BaseModel):
    email: EmailStr
    username: str
    first_name: str
    last_name: str
    hashed_password: str
    is_active: bool

class LoginRequest(BaseModel):
    username: str
    password: str

class AccessTokenResponse(BaseModel):
    access: str
    token: str