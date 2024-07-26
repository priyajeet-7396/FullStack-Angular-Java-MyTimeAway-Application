import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Leave } from '../../models/leave.model';
import { LeaveService } from '../../services/leave.service';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchForm: FormGroup;
  employees: Leave[] = [];

  constructor(private fb: FormBuilder, private employeeService: LeaveService) {
    this.searchForm = this.fb.group({
      employeeId: [''],
      employeeName: [''],
      totalDays: [0]
    });
  }

  onSearch(): void {
    const { employeeId, employeeName, totalDays } = this.searchForm.value;
    this.employeeService.searchLeaves(employeeId, employeeName, totalDays).subscribe((employees) => {
      this.employees = employees;
    });
  }

}
