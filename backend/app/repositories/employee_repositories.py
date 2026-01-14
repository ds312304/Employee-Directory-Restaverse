from sqlalchemy.orm import Session
from sqlalchemy import or_
from app.models.employee_model import Employee

def search_employees(db: Session, search: str):
    return (
        db.query(Employee)
        .filter(
            or_(
                Employee.name.ilike(f"%{search}%"),
                Employee.department.ilike(f"%{search}%")
            )
        )
        .limit(50)
        .all()
    )
