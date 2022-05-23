import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators }  from '@angular/forms';

@Component({
  selector: 'form-component',
  template: `
  <form [formGroup]="form">
    <label for="firstName">
      FirstName:
    </label>
    <input
      id="firstName"
      type="text"
      [class.is-invalid]="formValidator.isDirty(form, 'firstName')"
      formControlName="firstName"
    >
    <button type="submit" (submit)="onSubmit()">Submit</button>
  </form>
  `,
})
export class FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(42)]],
      lastName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(42)]],
    });
  }
  onSubmit() {}
}