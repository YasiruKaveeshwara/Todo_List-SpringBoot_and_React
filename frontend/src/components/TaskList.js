import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import "../styles/TaskList.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedDesc, setEditedDesc] = useState("");
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const toggleCompleted = async (task) => {
    try {
      const res = await api.put(`/tasks/${task.id}/complete`);
      const updatedTask = res.data;
      setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    } catch (err) {
      console.error("Failed to update task", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Failed to delete task", err);
    }
  };

  const handleEdit = (task) => {
    setEditingTaskId(task.id);
    setEditedDesc(task.description);
  };

  const handleUpdate = async (task) => {
    try {
      const updated = { ...task, description: editedDesc };
      const res = await api.post("/tasks", updated); 
      setTasks(tasks.map((t) => (t.id === task.id ? res.data : t)));
      setEditingTaskId(null);
    } catch (err) {
      console.error("Failed to update task", err);
    }
  };

  return (
    <div className='task-container'>
      <div className='task-header'>
        <h2>📋 Task List</h2>
        <button className='add-btn' onClick={() => navigate("/add")}>
          + Add Task
        </button>
      </div>
      <ul className='task-list'>
        {tasks.map((task) => (
          <li key={task.id} className='task-item'>
            <input type='checkbox' checked={task.completed} onChange={() => toggleCompleted(task)} />
            <div className='task-info'>
              <strong>{task.title}</strong>
              {editingTaskId === task.id ? (
                <input className='edit-input' type='text' value={editedDesc} onChange={(e) => setEditedDesc(e.target.value)} />
              ) : (
                <p className={`task-desc ${task.completed ? "completed" : ""}`}>{task.description}</p>
              )}
            </div>
            <div className='task-actions'>
              {editingTaskId === task.id ? (
                <button className='update-btn' onClick={() => handleUpdate(task)}>
                  Update
                </button>
              ) : (
                <button className='edit-btn' onClick={() => handleEdit(task)}>
                  Edit
                </button>
              )}
              <button className='delete-btn' onClick={() => handleDelete(task.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
