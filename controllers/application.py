from datetime import datetime, timedelta, timezone
import os
from fastapi import APIRouter, HTTPException, status
from sqlalchemy import desc
from models.application import Application
from uuid import uuid4
from temporal.workflows.application_workflow import ApplicationWorkflow
from temporalio.client import Client


from schemas.application import ApplicationResponseSchema
from schemas.application_form import ApplicationCreateForm

router = APIRouter(tags=["application"])


async def create_application_controller(db, user, form_data: ApplicationCreateForm):
    try:
        UPLOAD_DIR = f"uploads/resumes/{user.get('id')}"
        os.makedirs(UPLOAD_DIR, exist_ok=True)

        filename = f"{uuid4()}_{form_data.resume.filename}"
        file_path = os.path.join(UPLOAD_DIR, filename)

        with open(file_path, "wb") as f:
            content = await form_data.resume.read()
            f.write(content)

        application = Application(
            company_name=form_data.company_name,
            role=form_data.role,
            job_description=form_data.job_description,
            resume=file_path,
            cover_letter=form_data.cover_letter,
            owner_id=user.get("id"),
            deadline=form_data.deadline,
        )
        db.add(application)
        db.commit()
        db.refresh(application)
        client = await Client.connect("localhost:7233")

        await client.start_workflow(
            ApplicationWorkflow.run,
            args=[
                application.id,
                application.deadline.astimezone(timezone.utc).strftime(
                    "%Y-%m-%dT%H:%M:%S"
                ),
            ],
            id=f"application-workflow-{application.id}",
            task_queue="application-task-queue",
        )
        return ApplicationResponseSchema(
            id=application.id,
            company_name=application.company_name,
            role=application.role,
            job_description=application.job_description,
            resume=application.resume,
            cover_letter=application.cover_letter,
            deadline=application.deadline,
            created_at=application.created_at,
            status="Created",
            archived=False,
            needs_reminder=False,
        )

    except Exception as e:
        print(f"Error while creating application: {e}")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Could not create application",
        )


async def get_all_application_controller(db, user):
    try:
        applications = (
            db.query(Application)
            .filter(
                Application.owner_id == user.get("id"), Application.status != "Archived"
            )
            .order_by(desc(Application.created_at))
            .all()
        )
        return applications
    except Exception as e:
        print(f"Error while creating application: {e}")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Error while getting applications",
        )


async def get_single_application_controller(db, user, id):
    try:
        print(user)
        applications = (
            db.query(Application)
            .filter(Application.owner_id == user.get("id"), Application.id == id)
            .first()
        )
        return applications
    except Exception as e:
        print(f"Error while creating application: {e}")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Error while getting applications",
        )


async def update_single_application_controller(db, user, id, request_data):
    try:
        application = (
            db.query(Application)
            .filter(Application.owner_id == user.get("id"), Application.id == id)
            .first()
        )
        if not application:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, detail="Application not found"
            )
        for key, value in request_data:
            if hasattr(application, key):
                setattr(application, key, value)
        db.commit()
        db.refresh(application)
        return application
    except Exception as e:
        print(f"Error while updating application: {e}")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Error while updating application",
        )
