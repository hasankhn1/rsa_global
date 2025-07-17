from fastapi import Form, File, UploadFile

class ApplicationCreateForm:
    def __init__(
        self,
        company_name: str = Form(...),
        role: str = Form(...),
        job_description: str = Form(...),
        cover_letter: str = Form(...),
        deadline: str = Form(...),
        resume: UploadFile = File(...)
    ):
        self.company_name = company_name
        self.role = role
        self.job_description = job_description
        self.cover_letter = cover_letter
        self.deadline = deadline
        self.resume = resume
