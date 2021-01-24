import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectComponent } from './components/project/project.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  { path: 'project/:id', component: ProjectComponent},
  { path: 'task/:id', component: TaskComponent},
  { path: '', component: ProjectListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
