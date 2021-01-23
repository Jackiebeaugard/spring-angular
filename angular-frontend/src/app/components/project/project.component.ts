import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/project.interface';
import { Task } from 'src/app/shared/task.interface';
import { TaskService } from 'src/app/components/task/task.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project!: Project;
  taskList: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(tasks => { this.taskList = tasks })
  }

}
