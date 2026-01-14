from sqlalchemy import Column, Integer, String, Date
from app.db.base import Base

class Employee(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), index=True, nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    department = Column(String(100), index=True, nullable=False)
    designation = Column(String(100), nullable=False)
    date_of_joining = Column(Date, nullable=False)
