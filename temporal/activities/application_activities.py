from temporalio import activity
from db import SessionLocal
from models.application import Application
from models.user import User

@activity.defn(name='send_reminder_notification')
async def send_reminder_notification(application_id: int):
    db = SessionLocal()
    try:
        print(application_id, '****');
        app = db.query(Application).filter_by(id=application_id).first()
        if app and app.status == "Created":
            app.needs_reminder = True
            db.commit()
    finally:
        db.close()


@activity.defn(name='auto_archive_application')
async def auto_archive_application(application_id: int):
    db = SessionLocal()
    try:
        app = db.query(Application).filter_by(id=application_id).first()
        if app and app.status == "Created":
            app.status = "Archived"
            app.archived = True
            db.commit()
    finally:
        db.close()
