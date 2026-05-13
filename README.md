# ML User Behavior Analytics System

ระบบวิเคราะห์พฤติกรรมผู้ใช้งานเว็บไซต์ด้วย Machine Learning

## Features
- Real-time Analytics
- User Tracking
- Dashboard
- Machine Learning Prediction

## Technologies
- React.js
- FastAPI
- PostgreSQL
- scikit-learn

Project Structure
ml-user-behavior-system/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── auth.py
│   │   ├── routes/
│   │   │   ├── users.py
│   │   │   ├── analytics.py
│   │   │   └── prediction.py
│   │   └── machine_learning/
│   │       ├── train_model.py
│   │       ├── predict.py
│   │       └── dataset.csv
│   │
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Home.jsx
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── StatsCard.jsx
│   │   │   └── ChartSection.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── api.js
│   │
│   ├── package.json
│   └── vite.config.js
│
├── dataset/
│   └── user_behavior.csv
│
├── screenshots/
├── docs/
│
├── .gitignore
├── README.md
└── docker-compose.yml
