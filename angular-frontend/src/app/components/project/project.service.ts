import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/shared/project.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private url: string = 'http://localhost:8080/api/projects';
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

  createProject(project: Project): Observable<any> {
    return this.http.post(`${this.url}`, project, httpOptions);
  }

  updateProject(project: Project): Observable<any>{
    return this.http.put(`${this.url}`, project, httpOptions);
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
