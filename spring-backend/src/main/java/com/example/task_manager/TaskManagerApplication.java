package com.example.task_manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TaskManagerApplication implements CommandLineRunner {

  @Autowired
  com.example.todo.repository.TaskRepository taskRepository;

  public static void main(String[] args) {
    SpringApplication.run(TaskManagerApplication.class, args);
  }
}
