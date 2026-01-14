from fastapi import APIRouter, Depends, Query, HTTPException
from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.services.employee_services import get_employees

router = APIRouter(prefix="/employees", tags=["Employees"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("")
def search_employees(
    search: str = Query(..., min_length=1),
    db: Session = Depends(get_db)
):
    try:
        return get_employees(db, search)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(
        status_code=500,
        detail=str(e)
    )

