### Warning
***Please use .docx files with less text for generating cover letter***

JobTrackr – AI-Powered Job Application Manager 🚀

A full-stack MVP for tracking job applications with automated reminders, cover letter generation (via Open AI), and status updates. Built with React, Temporal.io (workflow automation), and deployed on Vercel.

Key Features
- Add Applications – Track company, role, job description, resume, and deadline.
- AI Cover Letters – Open API rewrites/resizes cover letters based on job descriptions.
- Temporal Workflows – Automates reminders, follow-ups, and auto-archiving.
- Status Updates – Mark applications as Interview, Rejected, Offer, etc.
- Deadline-Based Actions – Reminds you if no response, auto-archives after grace period.

# 🚀 Job Application Tracker

A full-stack job application tracker with smart reminders, automatic archiving, and AI-powered cover letter generation.

### Built with:

- ⚡ **FastAPI** (JWT Auth, REST API)
- ⚛️ **Next.js** (Frontend)
- ⏳ **Temporal.io** (Reminder + Auto-Archive)
- 🐘 **PostgreSQL** (Database)
- ✨ **OpenAI** (Cover Letter Generation)
- 🛠️ **Alembic** (DB Migrations)
- ☁️ **Railway** (Deployment)

---

## ✨ Features

- ✍️ Users can create job applications with company name, role, and deadline
- 🧠 **AI-generated cover letters** using OpenAI API based on the job description
- ⏰ Reminder sent **7 hours before deadline**
- 📦 Automatically archives applications **7 days after deadline** if status remains unchanged
- 🔐 Secure JWT authentication

---

## 🧠 Architecture Overview


## 🔧 Tech Stack

| Layer        | Tech Used                         |
|--------------|-----------------------------------|
| Frontend     | Next.js, Tailwind CSS             |
| Backend      | FastAPI, JWT, Pydantic            |
| Workflows    | Temporal.io (Cloud)               |
| DB           | PostgreSQL                        |
| Migrations   | Alembic                           |
| Deployment   | Railway.app                       |

