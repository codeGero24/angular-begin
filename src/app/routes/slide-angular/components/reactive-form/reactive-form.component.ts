import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

/** ⚠️ Per utilizzare ReactiveForm
 *      -> remove "FormsModule" to imports array /src/app/app.module.ts
 *      -> add "ReactiveFormsModule" to  imports array /src/app/app.module.ts
 */
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });
  submitted: boolean = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // - Used to access form key name
  get name() {
    return this.userForm.get('name');
  }
  // - Used to access form key email
  get email() {
    return this.userForm.get('email');
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }

    console.log('Form Reactive - value:', this.userForm.value);
    this.onReset();
  }

  onReset(): void {
    this.submitted = false;
    this.userForm.reset();
  }
}
