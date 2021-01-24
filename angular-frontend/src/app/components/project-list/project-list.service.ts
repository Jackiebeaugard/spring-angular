import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Project } from 'src/app/shared/project.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {
  private url: string = 'http://localhost:8080/projects';
  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<Project[]> {
    return this.http.get(this.url, httpOptions).pipe(map(response => {
      return response as Project[];
    }))
  }

  getProject(id: number): Observable<Project> {
    return this.http.get(`${this.url}/${id}`, httpOptions).pipe(map(response => {
      return response as Project;
    }))
  }
}
