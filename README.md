# 📝 To-Do List Application

A **modern, full-stack To-Do List application** built with **React (frontend)** and **Spring Boot (backend)**. Users can add, edit, complete, and delete tasks in a clean, minimalist light-blue themed interface. The backend is powered by **MongoDB** and offers a fully RESTful API.

## ✨ Features

- ✅ Add new tasks with title and description
- ✅ Mark tasks as **Completed/Incomplete**
- ✅ Edit task descriptions in-place
- ✅ Delete tasks instantly
- ✅ Tasks auto-refresh on action

## 🧠 Technologies Used

### 🖥️ Frontend

- **React** (with React Router)
- **Axios** for API communication
- **CSS** for styling

### 🔧 Backend

- **Spring Boot (3.4.4)**
- **MongoDB Atlas** (Cloud NoSQL DB)
- **Spring Data MongoDB**
- **CORS Configuration** via `WebMvcConfigurer`

## 🗂️ Folder Structure

```
📦todo-list/
├── backend/
│   ├── src/main/java/com/example/todo/
│   │   ├── controller/TaskController.java
│   │   ├── model/Task.java
│   │   ├── repository/TaskRepository.java
│   │   └── TodoApplication.java
│   └── resources/application.properties
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskList.js
│   │   │   └── AddTask.js
│   │   ├── styles/
│   │   │   └── TaskList.css
│   │   │   └── AddTask.css
│   │   ├── api.js
│   │   └── App.js
│   └── package.json

```

## 🔁 REST API Endpoints

| Method | Endpoint               | Description            |
| ------ | ---------------------- | ---------------------- |
| GET    | `/tasks`               | Get all tasks          |
| POST   | `/tasks`               | Create a new task      |
| PUT    | `/tasks/{id}/complete` | Toggle task completion |
| DELETE | `/tasks/{id}`          | Delete a task          |

## 🛠️ How to Run

### MongoDB Setup

1.  Create a MongoDB Atlas cluster or run MongoDB.
2.  Create **application.properties** file in **backend/src/main/resources/** path use this structure

```properties
spring.application.name=todo
spring.data.mongodb.uri=mongodb+srv://<username>:<password>@<cluster-url>/TodoDB
spring.data.mongodb.database=TodoDB
server.port=8080

```

### Backend (Spring Boot)

```bash
cd backend
./mvn spring-boot:run

```

### Frontend (React)

```bash
cd frontend
npm install
npm start

```

## ⚙️ Environment Configuration

Make sure to:

- Allow CORS in backend (WebMvcConfigurer)
- Set proper baseURL in api.js

```js
const api = axios.create({
  baseURL: "http://localhost:8080",
});
```

## 👨‍💻 Author

Yasiru Kaveeshwara – [GitHub](https://github.com/YasiruKaveeshwara)  
Contact: yasirukaveeshwara@gmail.com

Thank you for checking this out!
