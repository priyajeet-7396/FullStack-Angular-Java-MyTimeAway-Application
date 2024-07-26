import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { LeaveService } from '../../services/leave.service';
import { Leave } from '../../models/leave.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  empList: Leave[] = [];

  constructor(private leaveService: LeaveService, private router: Router) { }

  ngOnInit() {
    this.leaveService.getAllLeaves().subscribe((leaves: Leave[]) => {
      this.empList = leaves;
    }, (error) => {
      console.error("Error fetching data", error);
    });
  }

}
