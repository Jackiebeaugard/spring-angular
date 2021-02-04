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

  @Override
  public void run(String... args) throws Exception {
    com.example.todo.model.Task walkPoppy = new com.example.todo.model.Task("Walk Poppy");
    taskRepository.save(walkPoppy);
  }
}
