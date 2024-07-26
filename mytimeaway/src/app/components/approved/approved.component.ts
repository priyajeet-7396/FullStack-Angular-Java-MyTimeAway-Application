import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Leave } from '../../models/leave.model';
import { LeaveService } from '../../services/leave.service';


@Component({
  selector: 'app-approved',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './approved.component.html',
  styleUrl: './approved.component.css'
})
export class ApprovedComponent {

  empList:Leave []= []

  constructor( private emp:LeaveService, private router:Router) {
 
    }

    ngOnInit() {
      this.emp.getAllLeaves().subscribe((leaves: Leave[]) => {
        this.empList = leaves;
      }, (error) => {
        console.error("Error fetching data", error);
      });
    }


}
