from typing import Annotated
from fastapi.staticfiles import StaticFiles
import uvicorn
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db import SessionLocal
from routes import user, application

app = FastAPI(
    title="RSA GLOBAL USE CASE STUDY",
    description="Api endpoints for use case study for RSA Global",
    version="1.0.0"
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_db_dependency():
    return Annotated[SessionLocal, Depends(get_db)]


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user.router, prefix="/auth")
app.include_router(application.router, prefix="/api")
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

@app.get("/")
async def root():
    return {
        "docs": "/docs",
        "redoc": "/redoc"
    }

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

