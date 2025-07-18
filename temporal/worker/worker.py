import asyncio
from temporalio.client import Client
from temporalio.worker import Worker
from temporal.activities.application_activities import auto_archive_application, send_reminder_notification
from temporal.workflows import application_workflow

async def main():
    client = await Client.connect("localhost:7233")

    worker = Worker(
        client,
        task_queue="application-task-queue",
        workflows=[application_workflow.ApplicationWorkflow],
        activities=[send_reminder_notification, auto_archive_application]
    )
    print("🚀 Worker started.")
    await worker.run()

if __name__ == "__main__":
    asyncio.run(main())