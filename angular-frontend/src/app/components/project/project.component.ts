import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/task.interface';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  taskList: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(tasks => { this.taskList = tasks })
  }

}
