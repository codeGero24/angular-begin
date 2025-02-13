import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { field } from './types';
import { MOCK_FIELDS } from '@mock/mock-form-fields';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  dynamicForm: FormGroup;
  fields: any[] = [];
  submitted: boolean = true;

  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({});
  }

  ngOnInit(): void {
    MOCK_FIELDS.forEach((field: field) => this.addField(field));
  }

  addField({ id, name, label, type, placeholder, errors }: field): void {
    const newField = {
      id: (id ||= `field-${this.fields.length}`),
      name: (name ||= `field-${this.fields.length}`),
      label: (label ||= `Field-${this.fields.length}`),
      placeholder: (placeholder ||= ''),
      type: (type ||= 'text'),
      errors: errors || [],
    };
    const validators = [...errors].map((error) => error.validator);

    this.fields.push(newField);
    this.dynamicForm.addControl(
      newField.name,
      this.fb.control('', [Validators.required, ...validators])
    );
  }

  removeField(id: field['id']) {
    const filedRemove = this.fields.find((field) => field.id === id);
    const newFields = [...this.fields].filter((field) => field.id !== id);
    this.fields = [...newFields];

    if (filedRemove) {
      this.dynamicForm.removeControl(filedRemove.name);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.dynamicForm.invalid) {
      return;
    }

    console.log('Form Dynamic - value:', this.dynamicForm.value);
    this.onReset();
  }

  onReset(): void {
    this.submitted = false;
    this.dynamicForm.reset();
  }
}
