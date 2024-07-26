import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeaveService } from '../../services/leave.service';
import { Leave } from '../../models/leave.model';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {

  
  empList:Leave []= []

  constructor( private emp:LeaveService, private router:Router) {
 
    }

    delete(id:number){
     
      this.router.navigate(['user/delete1', id]);
    }

    ngOnInit(){
      this.emp.getAllLeaves().subscribe((leave: Leave []) => {
        this.empList = leave;
      }, (error) =>{
        console.error("Error fetching data ",error);
      }
    )
    }


}
