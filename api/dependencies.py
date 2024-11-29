from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session
from .database import get_db

def get_db_session():
    return Depends(get_db)

def verify_api_key(api_key: str = Depends(get_db_session)):
    if not api_key or api_key != os.getenv("API_KEY"):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid API key"
        )