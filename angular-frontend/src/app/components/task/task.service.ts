import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../../shared/task.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url: string = '/api/tasks';
  constructor(private http: HttpClient) {}

  getTasksByProject(id: number): Observable<Task[]> {
    return this.http.get(`${this.url}/${id}`, httpOptions).pipe(map(response => {
      return response as Task[];
    }))
  }
}
