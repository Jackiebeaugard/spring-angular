import { Component, OnInit } from '@angular/core';
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
  projectList: Project[] = [];
  title: string = 'Projects';

  constructor(private projectListService: ProjectListService) { }

  ngOnInit(): void {
    this.projectListService.getAllProjects().subscribe((projects: Project[]) => { this.projectList = projects })
  }
}
