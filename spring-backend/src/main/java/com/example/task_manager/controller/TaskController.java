package com.example.task_manager.controller;

import com.example.task_manager.model.Task;
import com.example.task_manager.repository.TaskRepository;
import com.sun.istack.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/api/tasks")
public class TaskController {
  @Autowired
  private TaskRepository taskRepository;

  @GetMapping
  public List<Task> findAll() { return taskRepository.findAll(); };

  @GetMapping(value="/{project_id}")
  public List<Task> findByProjectId(@PathVariable Long project_id) { return taskRepository.findAllByProjectId(project_id); }
  
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
