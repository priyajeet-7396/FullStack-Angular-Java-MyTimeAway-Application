import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveService } from '../../services/leave.service';
import { Leave } from '../../models/leave.model';


@Component({
  selector: 'app-edit1',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit1.component.html',
  styleUrl: './edit1.component.css'
})
export class Edit1Component implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  empid: number = 0;
  empForm: FormGroup;

  constructor(private em: LeaveService, private router: Router) {
    this.empid = this.route.snapshot.params['id'];

    this.empForm = new FormGroup({
      id: new FormControl(),
      employeeId: new FormControl(),
      employeeName: new FormControl(),
      employeePhone: new FormControl(),
      employeeEmail: new FormControl(),
      managerEmail: new FormControl(),
      fromDate: new FormControl(),
      toDate: new FormControl(),
      totalDays: new FormControl(),
      reason: new FormControl(),
      status: new FormControl(),
      isProcessed: new FormControl()
    });
  }

  ngOnInit() {
    this.em.getLeaveById(this.empid).subscribe((emp: Leave) => {
      this.empForm.setValue({
        id: emp.id,
        employeeId: emp.employeeId,
        employeeName: emp.employeeName,
        employeePhone: emp.employeePhone,
        employeeEmail: emp.employeeEmail,
        managerEmail: emp.managerEmail,
        fromDate: emp.fromDate,
        toDate: emp.toDate,
        totalDays: emp.totalDays,
        reason: emp.reason,
        status: emp.status,
        isProcessed: emp.isProcessed
      });
    });
  }

  onSubmit() {
    let updatedEmp: Leave = {
      id: this.empForm.get('id')?.value,
      employeeId: this.empForm.get('employeeId')?.value,
      employeeName: this.empForm.get('employeeName')?.value,
      employeePhone: this.empForm.get('employeePhone')?.value,
      employeeEmail: this.empForm.get('employeeEmail')?.value,
      managerEmail: this.empForm.get('managerEmail')?.value,
      fromDate: this.empForm.get('fromDate')?.value,
      toDate: this.empForm.get('toDate')?.value,
      totalDays: this.empForm.get('totalDays')?.value,
      reason: this.empForm.get('reason')?.value,
      status: this.empForm.get('status')?.value,
      isProcessed: this.empForm.get('isProcessed')?.value
    };

    this.em.updateLeaveById(this.empid, updatedEmp).subscribe(() => {
      this.router.navigate(['user/list']);
    });
  }
}
