import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>📝 To-Do List</h1>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/add' element={<AddTask />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
