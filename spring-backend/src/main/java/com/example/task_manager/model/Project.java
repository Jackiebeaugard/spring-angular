package com.example.task_manager.model;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.util.List;

@Entity
public class Project {
  @Id
  @GeneratedValue
  private Long id;
  @NotNull
  private String title;
  private String description;
  private boolean complete;

  @OneToMany(mappedBy = "project", cascade = CascadeType.ALL)
  private List<Task> tasks;

  public Project(Long id, String title, String description, boolean complete, List<Task> tasks) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.complete = complete;
    this.tasks = tasks;
  }

  public Project() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public boolean isComplete() {
    return complete;
  }

  public void setComplete(boolean complete) {
    this.complete = complete;
  }

  public List<Task> getTasks() {
    return tasks;
  }

  public void setTasks(List<Task> tasks) {
    this.tasks = tasks;
  }
}
