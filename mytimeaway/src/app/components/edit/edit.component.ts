import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Leave } from '../../models/leave.model';
import { LeaveService } from '../../services/leave.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  empList:Leave []= []

  constructor( private emp:LeaveService, private router:Router) {
 
    }

    edit(id:number){
      this.router.navigate(['user/edit1', id]);
    }

    ngOnInit() {
      this.emp.getAllLeaves().subscribe((leaves: Leave[]) => {
        this.empList = leaves;
      }, (error) => {
        console.error("Error fetching data", error);
      });
    }

}
