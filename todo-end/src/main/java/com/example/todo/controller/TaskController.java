package com.example.todo.controller;

import com.example.todo.model.Task;
import com.example.todo.repository.TaskRepository;
import com.sun.istack.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/todo")
public class TaskController {
  @Autowired
  private TaskRepository taskRepository;
  
  @GetMapping
  public List<Task> findAll() { return taskRepository.findAll(); };
  
  @PostMapping
  public Task save(@Validated @NotNull @RequestBody Task task) {
    return taskRepository.save(task);
  }

  @PutMapping
  public Task update(@Validated @NotNull @RequestBody Task task) {
    return taskRepository.save(task);
  }

  @DeleteMapping(value="/{id}")
  public void delete(@PathVariable Long id) {
    taskRepository.deleteById(id);
  }
}
