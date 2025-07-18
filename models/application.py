from db import Base
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.sql import func

class Application(Base):
    __tablename__ = 'applications'

    id = Column(Integer, primary_key=True, index=True)
    company_name = Column(String, unique=True, index=True, nullable=False)
    role = Column(String, nullable=False)
    job_description = Column(String, nullable=False)
    resume = Column(String)
    cover_letter = Column(String)
    deadline = Column(DateTime)
    owner_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    status = Column(String, default="Created")
    needs_reminder = Column(Boolean, default=False)
    archived = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
