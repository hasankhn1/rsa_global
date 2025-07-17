


from datetime import UTC, datetime 
from db import Base
from sqlalchemy import BOOLEAN, Column, DateTime, Integer, String, func


class User(Base):
    class Config:
        orm_mode = True
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True)
    username = Column(String, index=True, unique=True)
    first_name = Column(String)
    last_name = Column(String)
    hashed_password = Column(String)
    is_active = Column(BOOLEAN, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())