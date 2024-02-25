import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-and-submit-enable-disable',
  templateUrl: './edit-and-submit-enable-disable.component.html',
  styleUrls: ['./edit-and-submit-enable-disable.component.css']
})
export class EditAndSubmitEnableDisableComponent {

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
  