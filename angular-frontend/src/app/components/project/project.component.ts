import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/project.interface';
import { Task } from 'src/app/shared/task.interface';
import { TaskService } from 'src/app/components/task/task.service';
import { ProjectListService } from '../project-list/project-list.service';
import { forkJoin } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  addButtonText: string = 'Add Task';
  completeButtonText: string = 'Complete';
  project!: Project;
  projectId!: number;
  taskList: Task[] = [];

  constructor(private taskService: TaskService, private projectListService: ProjectListService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const projectId: string | null = params.get('id');
      this.projectId = typeof(projectId) === 'string' ? +projectId : -1;
    })
  }

  ngOnInit(): void {
    if(this.projectId >= 0) {
      forkJoin({
        tasks: this.taskService.getTasksByProject(this.projectId),
        project: this.projectListService.getProject(this.projectId)
      }).subscribe(data =>{
        this.taskList = data.tasks;
        this.project = data.project;
      })
    }
  }

}
