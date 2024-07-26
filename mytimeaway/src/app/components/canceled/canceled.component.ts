import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Leave } from '../../models/leave.model';
import { LeaveService } from '../../services/leave.service';

@Component({
  selector: 'app-canceled',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './canceled.component.html',
  styleUrl: './canceled.component.css'
})
export class CanceledComponent {
  empList:Leave []= []

  constructor( private emp:LeaveService, private router:Router) {
 
    }

    ngOnInit(){
      this.emp.getAllLeaves().subscribe((Employee) => {
        this.empList = Employee;
      }, (error) =>{
        console.error("Error fetching data ",error);
      }
    )
    }
}
