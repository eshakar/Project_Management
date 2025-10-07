
---

# 🧩 Mini TaskBoard — MERN Stack Project

A **Mini TaskBoard web app** inspired by tools like ClickUp and Monday.com.
Users can create and manage **Projects** and **Tasks**, update task statuses, and delete them easily — all with a clean and responsive UI.

---

## 🚀 Live Demo

🔗 **Frontend (Vercel):** [https://project-management-cixp.vercel.app/](https://project-management-cixp.vercel.app/)
🔗 **Backend (Render):** [https://project-management-vc90.onrender.com/](https://project-management-vc90.onrender.com/)

---

## 🧠 Tech Stack

| Layer          | Technology                                     |
| -------------- | ---------------------------------------------- |
| **Frontend**   | React (Vite), TailwindCSS (OKLCH custom color) |
| **Backend**    | Node.js, Express.js                            |
| **Database**   | MongoDB Atlas                                  |
| **Deployment** | Frontend → Vercel, Backend → Render            |

---

## 📂 Project Structure

### **Frontend (client folder)**

```
client/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── TaskCard.jsx
│   ├── pages/
│   │   ├── ProjectsPage.jsx
│   │   └── ProjectDetailsPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── package.json
└── tailwind.config.js
```

### **Backend (server folder)**

```
backend/
├── config/
│   └── db.js
├── models/
│   ├── Project.js
│   └── Task.js
├── routes/
│   ├── projectRoutes.js
│   └── taskRoutes.js
├── server.js
├── package.json
└── .env
```

---

## ⚙️ Environment Variables

### **Backend (.env)**

```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```

### **Frontend (.env)**

```env
VITE_BACKEND_URL=https://project-management-vc90.onrender.com
```

---

## 🧭 API Routes Overview

### 🔹 **Projects API**

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | `/api/projects`     | Get all projects   |
| POST   | `/api/projects`     | Create new project |
| DELETE | `/api/projects/:id` | Delete a project   |

### 🔹 **Tasks API**

| Method | Endpoint                | Description                           |
| ------ | ----------------------- | ------------------------------------- |
| GET    | `/api/tasks/:projectId` | Get tasks for a project               |
| POST   | `/api/tasks`            | Add a new task                        |
| PUT    | `/api/tasks/:id`        | Update a task (e.g., status or title) |
| DELETE | `/api/tasks/:id`        | Delete a task                         |

---

## 🧑‍💻 Run Locally

### 1️⃣ Clone the repo

```bash
git clone https://github.com/eshakar/Mini_taskboard.git
cd Mini_taskboard
```

### 2️⃣ Setup backend

```bash
cd backend
npm install
```

Create `.env` file → add your MongoDB URI.
Then start server:

```bash
npm start
```

### 3️⃣ Setup frontend

```bash
cd ../client
npm install
npm run dev
```

Frontend runs on **[http://localhost:5173](http://localhost:5173)**
Backend runs on **[http://localhost:5000](http://localhost:5000)**

---

## 🎨 Features

✅ Create, view, and delete projects
✅ Add, update, and delete tasks under projects
✅ Update task status (Todo / In Progress / Done)
✅ Responsive UI with TailwindCSS
✅ Deployed frontend & backend connected live

---

## 🧾 License

This project is open source and available under the **MIT License**.

---
