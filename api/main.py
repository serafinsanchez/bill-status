from fastapi import FastAPI, HTTPException, Query, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, text
from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import date
from pydantic import BaseModel
from enum import Enum
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(
    title="Colorado Legislative Bills API",
    description="API for accessing Colorado state legislative bill information",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database configuration
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://user:password@localhost:5432/colorado_bills")
engine = create_engine(DATABASE_URL)

# Pydantic models and API endpoints as previously defined...
