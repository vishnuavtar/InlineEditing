import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-submit-button-active',
  templateUrl: './submit-button-active.component.html',
  styleUrls: ['./submit-button-active.component.css']
})
export class SubmitButtonActiveComponent {


  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      // Define your form fields and validators
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Add more fields as needed
    });
  }

  onSubmit() {
    // Handle form submission
    if (this.form.valid) {
      // Form is valid, proceed with submission
      console.log('Form submitted!');
    }
  }
}
