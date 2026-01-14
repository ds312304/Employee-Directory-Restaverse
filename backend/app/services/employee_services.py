from sqlalchemy.orm import Session
from app.repositories.employee_repositories import search_employees

def get_employees(db: Session, search: str):
    if not search or not search.strip():
        raise ValueError("Search query cannot be empty")

    return search_employees(db, search)
