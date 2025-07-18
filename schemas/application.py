from datetime import datetime
from pydantic import BaseModel
from typing import Optional

# For form data requests
class ApplicationRequestSchema(BaseModel):
    company_name: str
    role: str
    job_description: str
    cover_letter: str
    deadline: str
    
    class Config:
        arbitrary_types_allowed = True

# For database model/response
class ApplicationResponseSchema(BaseModel):
    id: int
    company_name: str
    role: str
    job_description: str
    resume: str
    cover_letter: str
    deadline: datetime
    created_at: datetime
    status: Optional[str]
    needs_reminder: Optional[bool]
    archived: Optional[bool]



    class Config:
        from_attributes = True