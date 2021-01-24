import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/shared/project.interface';
import { ProjectService } from '../project/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent {
  form: FormGroup;
  title: string = 'Add Project'
  constructor(private fb: FormBuilder, private projectService: ProjectService) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: '',
    })
  }

  submit(): void {
    if(this.form.valid) {
      const newProject: Project = {
        title: this.form.controls.title.value,
        description: this.form.controls.description.value,
        complete: false
      }
  
      this.projectService.createProject(newProject).subscribe((response: any) => {
        console.log('response: ', response)
      })
    }
  }
}
