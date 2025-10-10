# 🎓 Student CRUD App — React + Express + MySQL (Full-Stack Practice Project)

This is my **first full-stack project** built while learning **React (frontend)**, **Express.js (backend)**, and **MySQL (database)**.  
It is a small **CRUD (Create, Read, Update, Delete)** web application that allows managing student data — like registration, listing, updating, and deletion — through RESTful APIs.

---

## 🧠 Project Overview

The goal of this project is to understand:
- How frontend (React) connects to backend (Express API)
- How backend communicates with MySQL database
- How to handle APIs, routing, state, and form validation
- How to use `useState`, `useEffect`, and `useForm` hooks in React
- How to set up a local development proxy between Vite and Express

This project follows a **modular structure** with clear separation between frontend and backend.

---

## ⚙️ Tech Stack

### 🖥️ Frontend (React + Vite)
- **React.js (with Vite)** — UI and API integration  
- **React Hook Form** — for managing forms and validation  
- **Redux Toolkit (optional)** — for state management  
- **Axios / Fetch API** — for making API calls  
- **TailwindCSS (optional)** — for styling and responsive UI  

### ⚙️ Backend (Node.js + Express.js)
- **Express.js** — server framework  
- **MySQL2** — database connector (Promise-based)  
- **CORS + Helmet + Morgan** — for security and request logging  
- **dotenv** — to handle environment variables  

### 🗄️ Database
- **MySQL** — for storing student records  
- Local setup using **XAMPP / MySQL Server**  

---

## 📁 Folder Structure

│
├── backend/ # Express + MySQL server
│ ├── db.js # Database connection file
│ ├── studentController.js # Controller functions for CRUD
│ ├── routes.js # All API routes
│ ├── server.js # Main server entry point
│ ├── .env # Environment variables
│ └── package.json
│
├── frontend/ # React frontend (Vite)
│ ├── src/
│ │ ├── App.jsx # Main React app file
│ │ ├── components/ # Reusable UI components
│ │ └── pages/ # Page-level components
│ ├── vite.config.js # Dev server + proxy setup
│ ├── package.json
│ └── index.html
│
└── README.md # You're reading this!

---

## 🧩 Features

✅ **Frontend:**
- React UI built with clean, modular structure  
- React Hook Form for validation and submission  
- Dynamic listing of students fetched from backend  
- Responsive UI (optional TailwindCSS styling)

✅ **Backend:**
- RESTful API endpoints  
- Database operations (Insert, Fetch, Update, Delete)  
- Proper error handling and response messages  
- MySQL connection pooling for performance  

✅ **Database:**
- Student data stored in `studentcrudapp` DB  
- Simple schema: ID, Student Name, Standard, Roll, Age  

---


