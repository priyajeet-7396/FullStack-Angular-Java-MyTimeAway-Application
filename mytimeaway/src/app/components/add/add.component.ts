import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeaveService } from '../../services/leave.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  leaveForm!: FormGroup;

  constructor(private fb: FormBuilder, private leaveService: LeaveService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.leaveForm = this.fb.group({
      employeeId: ['', Validators.required],
      employeeName: ['', Validators.required],
      employeePhone: ['', Validators.required],
      employeeEmail: ['', Validators.required],
      managerEmail: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      totalDays: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.leaveForm.valid) {
      this.leaveService.createLeave(this.leaveForm.value).subscribe(
        (createdEmployee) => {
          this.router.navigate(['/user/list']);
        },
        (error) => {
          console.error('Error creating employee', error);
        }
      );
    }
  }
}
