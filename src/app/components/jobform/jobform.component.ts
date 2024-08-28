import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-job-form',
  templateUrl: './jobform.component.html',
  styleUrls: ['./jobform.component.css'],
  imports:[FormsModule,ReactiveFormsModule,CommonModule]
})
export class JobFormComponent implements OnInit {
  @Input() jobCategory: string = '';
  jobForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.jobForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      experience: ['', Validators.required],
      specialization: [''],
      availability: ['', Validators.required],
    });

    if (this.jobCategory === 'Medical Staff') {
      this.jobForm.addControl('medicalLicense', this.fb.control('', Validators.required));
      this.jobForm.addControl('specialization', this.fb.control('', Validators.required));
    }
  }

  onSubmit() {
    if (this.jobForm.valid) {
      console.log(this.jobForm.value);
      // Handle form submission
    }
  }
}