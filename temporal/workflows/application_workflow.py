from datetime import datetime, timedelta, timezone
from temporalio import workflow
from temporal.activities.application_activities import auto_archive_application, send_reminder_notification

@workflow.defn
class ApplicationWorkflow:
    def __init__(self):
        self.status = "Created"

    @workflow.run
    async def run(self, application_id: int, deadline: str):
        deadline_time = datetime.strptime(deadline, "%Y-%m-%dT%H:%M:%S").replace(tzinfo=timezone.utc)

        now = workflow.now()
        wait_time = deadline_time - now

        if wait_time.total_seconds() > 0:
            await workflow.sleep(wait_time)
        print(self.status, '*****', wait_time.total_seconds());
        if self.status == "Created":
            print('here', application_id);
            print("No update by deadline. Triggering reminder.")
            await workflow.execute_activity(
                send_reminder_notification,
                args=[application_id],
                schedule_to_close_timeout=timedelta(seconds=60),
                task_queue="application-task-queue"
            )

        # Grace period = 7 days
        await workflow.sleep(timedelta(seconds=7))

        if self.status == "Created":
            await workflow.execute_activity(
                auto_archive_application,
                application_id,
                schedule_to_close_timeout=timedelta(seconds=10),
                task_queue="application-task-queue"
            )
            workflow.logger.info("Auto-archived application")

    @workflow.signal
    async def update_status(self, new_status: str):
        self.status = new_status
