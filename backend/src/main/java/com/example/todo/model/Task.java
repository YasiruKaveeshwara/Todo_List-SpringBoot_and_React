package com.example.todo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "tasks")
public class Task {

  @Id
  private String id;
  private String title;
  private String description;
  private boolean completed;

  public Task() {
  }

  public Task(String title, String description, boolean completed) {
    this.title = title;
    this.description = description;
    this.completed = false;
  }
  
  // Getters and Setters
  public String getId() {
    return id;
  }

  public String getTitle() {
    return title;
  }

  public String getDescription() {
    return description;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public boolean isCompleted() {
    return completed;
  }

  public void setCompleted(boolean completed) {
    this.completed = completed;
  }


}
