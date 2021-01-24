import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/project.interface';
import { ProjectService } from '../project/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  addButtonText: string = 'Add Project';
  completeButtonText: string = 'Complete';
  emptyListMessage: string = 'There are no projects here. Click the Add Project button to get started!'
  errorMessage: string | null = null;
  markCompleteMessage: string | null = null;
  projectList: Project[] = [];
  title: string = 'Projects';

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getAllProjects().subscribe((projects: Project[]) => {
      this.projectList = projects
    });
  }

  deleteProject(id: number | undefined): void {
    if (typeof id === 'number') {
      this.projectService.deleteProject(id).subscribe(() => {
        this.projectList = this.projectList.filter(project => project.id !== id);
      });
    }
  }

  markComplete(id: number | undefined): void {
    if (typeof id === 'number') {
      const project: Project | undefined = this.projectList.find(project => project.id === id);
      if(project) {
        project.complete = true;
        this.markCompleteMessage = `Project ${project.title} has been marked complete!`;
        this.projectService.updateProject(project).subscribe(() => {
          setTimeout(() => {
            this.markCompleteMessage = null;
          }, 5000)
        });
      }
    }
  }
}
