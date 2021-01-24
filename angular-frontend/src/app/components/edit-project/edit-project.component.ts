import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Project } from 'src/app/shared/project.interface';
import { ProjectService } from '../project/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent {
  @Input() project!: Project;
  form: FormGroup;
  title: string = 'Add Project'
  constructor(private fb: FormBuilder, private projectService: ProjectService) {
    this.form = this.fb.group({
      title: [this.project?.title, Validators.required],
      description: this.project?.description,
      complete: this.project?.complete
    })
  }

  submit(): void {
    if(this.form.valid) {
      const project: Project = {
        title: this.form.controls.title.value,
        description: this.form.controls.description.value,
        complete: this.form.controls.complete.value
      }
  
      this.projectService.updateProject(project).subscribe((response: any) => {
        console.log('response: ', response)
      })
    }
  }
}
