import { Component, OnInit } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Project } from 'src/app/shared/project.interface';
import { ProjectListService } from './project-list.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  addButtonText: string = 'Add Project';
  completeButtonText: string = 'Complete';
  errorMessage: string | null = null;
  projectList: Project[] = [];
  title: string = 'Projects';

  constructor(private projectListService: ProjectListService) { console.log('project list: ') }

  ngOnInit(): void {
    this.projectListService.getAllProjects().subscribe((projects: Project[]) => {
      console.log('projects: ', projects)
      this.projectList = projects
    });
  }
}
