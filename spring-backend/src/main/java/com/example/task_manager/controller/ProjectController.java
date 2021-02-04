package com.example.task_manager.controller;

import com.example.task_manager.model.Project;
import com.example.task_manager.repository.ProjectRepository;
import com.sun.istack.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/api/projects")
public class ProjectController {
  @Autowired
  private ProjectRepository projectRepository;

  @GetMapping
  public List<Project> findAll() { return projectRepository.findAll(); }

  @GetMapping(value="/{id}")
  public Optional<Project> findById(@PathVariable Long id) { return projectRepository.findById(id); }

  @PostMapping
  public Project save(@Validated @NotNull @RequestBody Project project) {
    return projectRepository.save(project);
  }

  @PutMapping
  public Project update(@Validated @NotNull @RequestBody Project project) {
    return projectRepository.save(project);
  }

  @DeleteMapping(value="/{id}")
  public void delete(@PathVariable Long id) {
    System.out.println("This is the id: " + id);
    projectRepository.deleteById(id);
  }
}
