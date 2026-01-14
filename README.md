# Employee Directory Search System

A full-stack internal tool to search and view employee details efficiently.  
Built as an SDE assignment with focus on **performance, clean architecture, and scalability**.

---

## Tech Stack

### Frontend
- React + Vite
- Tailwind CSS
- Axios

### Backend
- Python
- FastAPI
- SQLAlchemy
- MySQL

---

## Features

- Search employees by **name or department**
- Debounced search to prevent excessive API calls
- Smooth UI updates with skeleton loaders
- Scrollable employee list
- Clear handling of loading, empty, and error states
- Clean frontend & backend architecture
- Environment-based configuration (no hardcoded URLs or credentials)

---

## Project Structure

Employee_Directory/
├── employee_directory/
│ ├── src/
│ │ ├── components/
│ │ ├── hooks/
│ │ ├── services/
│ │ └── config/
│ ├── .env.example
│ └── README.md
├── backend/
│ ├── app/
│ │ ├── routers/
│ │ ├── services/
│ │ ├── repositories/
│ │ ├── models/
│ │ ├── schemas/
│ │ └── db/
│ ├── requirements.txt
│ ├── .env.example
│ └── README.md
└── README.md


---

##  Backend Setup

### 1. Create Virtual Environment
```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
```

### 2. Install dependencies
pip install -r requirements.txt

### 3. Environment Variables
DATABASE_URL=mysql+pymysql://<username>:<password>@localhost:3306/test
A .env.example file is provided for reference.

### 4. Run Backend
uvicorn app.main:app --reload
Backend runs at: http://127.0.0.1:8000

##  Database Design
CREATE TABLE employees (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  department VARCHAR(100) NOT NULL,
  designation VARCHAR(100) NOT NULL,
  date_of_joining DATE NOT NULL,
  INDEX idx_name (name),
  INDEX idx_department (department)
);

##  Frontend Setup
### 1. Install Dependencies
cd frontend
npm install

### 2. Environment  Valriables
VITE_API_BASE_URL=http://127.0.0.1:8000

### 3. Run Frontend
npm run dev
Frontend runs at: http://localhost:5173

##  Sample Test Request
GET /employees?search=rahul
Response:
[
  {
    "id": 1,
    "name": "Rahul Sharma",
    "email": "rahul.sharma@company.com",
    "department": "Engineering",
    "designation": "Software Engineer",
    "date_of_joining": "2022-06-15"
  }
]

## Database Choice

MySQL was chosen as the database because:

- The data is structured and relational in nature
- MySQL provides strong indexing support for search operations
- It is widely used in production systems
- SQL-based filtering allows efficient querying at scale

Indexes are added on `name` and `department` to ensure fast search performance
even as the number of employees grows.


## Search Performance Optimization

### Frontend Optimization
- Search input is debounced to avoid sending an API request on every keystroke
- API calls are triggered only after the user pauses typing
- This reduces unnecessary network requests and improves UI responsiveness

### Backend Optimization
- Search is performed at the database level, not in application memory
- Indexed columns (`name`, `department`) are used for filtering
- Only required data is fetched, with a limited result set

This approach ensures the system remains performant and scalable
as the employee count increases.
