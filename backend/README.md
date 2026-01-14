
### Purpose
Explain **backend setup, architecture, and database decisions**.  
Do **not** explain frontend here.

---

### 

```md
# Employee Directory – Backend

This is the backend service for the Employee Directory Search System, built using **FastAPI** and **MySQL**.

The backend is designed with a **clean, layered architecture** to ensure scalability, maintainability, and performance.

---

## Tech Stack

- Python
- FastAPI
- SQLAlchemy
- MySQL
- Uvicorn

---

## Project Structure
app/
├── main.py # Application entry point
├── routers/ # HTTP route definitions
├── services/ # Business logic
├── repositories/ # Database access layer
├── models/ # SQLAlchemy ORM models
├── schemas/ # Pydantic schemas
└── db/ # Database configuration


---

## ⚙️ Setup Instructions

### 1. Create Virtual Environment
```bash
python -m venv venv
venv\Scripts\activate   # Windows

### 2. Install Dependencies
pip install -r requirements.txt

### 3. Environment Configuration
DATABASE_URL=mysql+pymysql://<username>:<password>@localhost:3306/test

### 4. Run the server
uvicorn app.main:app --reload
Backend run at: http://127.0.0.1:8000
