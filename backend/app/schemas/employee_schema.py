from pydantic import BaseModel
from datetime import date

class EmployeeResponse(BaseModel):
    id: int
    name: str
    email: str
    department: str
    designation: str
    date_of_joining: date

    class Config:
        orm_mode = True
