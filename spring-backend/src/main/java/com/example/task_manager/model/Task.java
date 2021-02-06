package com.example.task_manager.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
public class Task {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @NotNull
  private String title;
  private String detail;
  private boolean complete;

  @JsonIgnore
  @ManyToOne(cascade= CascadeType.ALL)
  @JoinColumn(name="project_id", nullable = false)
  private Project project;

  public Task(Long id, String title, String detail, boolean complete, Project project) {
    this.id = id;
    this.title = title;
    this.detail = detail;
    this.complete = complete;
    this.project = project;
  }

  public Task() {}

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

  public String getDetail() {
    return detail;
  }

  public void setDetail(String detail) {
    this.detail = detail;
  }

  public boolean isComplete() {
    return complete;
  }

  public void setComplete(boolean complete) {
    this.complete = complete;
  }

  public Project getProject() {
    return project;
  }

  public void setProject(Project project) {
    this.project = project;
  }
}
