import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/project.interface';
import { Task } from 'src/app/shared/task.interface';
import { TaskService } from 'src/app/components/task/task.service';
import { forkJoin } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  addButtonText: string = 'Add Task';
  completeButtonText: string = 'Complete';
  editButtonText: string = 'Edit Project';
  emptyListMessage: string = 'There are no tasks here. Click the Add Task button to get started!'
  markCompleteMessage: string | null = null;
  project!: Project;
  projectId!: number;
  taskList: Task[] = [];

  constructor(private taskService: TaskService, private projectService: ProjectService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const projectId: string | null = params.get('id');
      this.projectId = typeof(projectId) === 'string' ? +projectId : -1;
    })
  }

  ngOnInit(): void {
    if(this.projectId >= 0) {
      forkJoin({
        tasks: this.taskService.getTasksByProject(this.projectId),
        project: this.projectService.getProject(this.projectId)
      }).subscribe(data =>{
        this.taskList = data.tasks;
        this.project = data.project;
      })
    }
  }

  markComplete(id: number | undefined): void {
    if (typeof id === 'number') {
      const task: Task | undefined = this.taskList.find(task => task.id === id);
      if(task) {
        task.complete = true;
        this.markCompleteMessage = `Task ${task.title} has been marked complete!`;
        this.projectService.updateProject(task).subscribe(() => {
          setTimeout(() => {
            this.markCompleteMessage = null;
          }, 5000)
        });
      }
    }
  }

}
