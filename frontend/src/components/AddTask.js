import React, { useState } from "react";
import api from "../api";
import "../styles/AddTask.css";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return alert("Please fill both fields");

    try {
      await api.post("/tasks", {
        title,
        description,
        completed: false,
      });

      setTitle("");
      setDescription("");
      alert("Task added!");
      window.location.href = "/"; 
    } catch (err) {
      console.error("Error adding task:", err);
      alert("Error adding task.");
    }
  };

  return (
    <form className='add-task-form' onSubmit={handleAdd}>
      <input type='text' placeholder='Task Title' value={title} onChange={(e) => setTitle(e.target.value)} className='input-field' />
      <input
        type='text'
        placeholder='Task Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='input-field'
      />
      <button type='submit' className='add-btn'>
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
