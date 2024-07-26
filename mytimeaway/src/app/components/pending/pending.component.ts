import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { Leave } from '../../models/leave.model';
import { LeaveService } from '../../services/leave.service';


@Component({
  selector: 'app-pending',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './pending.component.html',
  styleUrl: './pending.component.css'
})
export class PendingComponent {
  
  leaveApplications: Leave[] = [];

  constructor(private leaveService: LeaveService) { }

  ngOnInit() {
    this.fetchLeaveApplications()

  }

  fetchLeaveApplications() {
    this.leaveService.getAllLeaves().subscribe(
      (leaves) => {
        this.leaveApplications = leaves;
      },
      (error) => {
        console.error('Error fetching leave applications:', error);
      }
    );

  }

  cancelLeave(application: Leave) {
    this.leaveService.cancelLeaveRequest(application.id).subscribe(
      () => {
        this.fetchLeaveApplications();
      },
      (error) => {
        console.error('Error canceling leave application:', error);
      }
    );
  }

  approveLeave(application: Leave) {
    this.leaveService.approveLeaveRequest(application.id).subscribe(
      () => {
        this.fetchLeaveApplications();
      },
      (error) => {
        console.error('Error canceling leave application:', error);
      }
    );
  }

}
