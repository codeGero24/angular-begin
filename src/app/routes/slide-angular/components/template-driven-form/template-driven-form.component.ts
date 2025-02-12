import { Component } from '@angular/core';

/** ⚠️ Per utilizzare Template driven approach
 *      -> add "FormsModule" to imports array /src/app/app.module.ts
 *      -> remove "ReactiveFormsModule" to  imports array /src/app/app.module.ts
 */

type UserForm = {
  name: string;
  email: string;
};
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent {
  user: UserForm = {
    name: '',
    email: '',
  };
  submitted: boolean = true;

  onSubmit(formData: any) {
    if (formData.valid) {
      this.submitted = true;
      console.log('Form Template Driven - value:', this.user);
      this.onReset(formData);
    }
  }

  onReset(formData: any): void {
    this.submitted = false;
    formData.reset();
  }
}
