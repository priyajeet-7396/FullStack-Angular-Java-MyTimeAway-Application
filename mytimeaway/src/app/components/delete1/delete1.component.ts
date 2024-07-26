import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveService } from '../../services/leave.service';
import { Leave } from '../../models/leave.model';


@Component({
  selector: 'app-delete1',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './delete1.component.html',
  styleUrl: './delete1.component.css'
})
export class Delete1Component {

  route:ActivatedRoute = inject(ActivatedRoute);

  empid:number = 0;

  emp:any;

constructor(private em:LeaveService , private router:Router){
  this.empid = this.route.snapshot.params['id'];

}

ngOnInit(){
  this.em.getLeaveById(this.empid).subscribe((emp:Leave) => {
    this.emp =emp;

    
  })
  
}

delete(id: number) {
  this.em.deleteLeaveById(id).subscribe(() => {
    console.log(`Employee with ID ${id} deleted`);
    this.router.navigate(['user/list']);
  }, error => {
    console.error('Error deleting employee:', error);
  });
}




}
