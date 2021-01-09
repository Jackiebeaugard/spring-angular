package com.example.todo.model;

import com.sun.istack.NotNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Task {
  @Id
  @GeneratedValue
  private Long id;
  @NotNull
  private String title;
  private boolean done;

  public Task(Long id, String title, boolean done) {
    this.id = id;
    this.title = title;
    this.done = done;
  }

  public Task() {
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

  public boolean isDone() {
    return done;
  }

  public void setDone(boolean done) {
    this.done = done;
  }
}
