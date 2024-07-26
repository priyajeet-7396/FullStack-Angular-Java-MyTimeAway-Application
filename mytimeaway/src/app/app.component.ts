import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { AdminComponent } from './components/admin/admin.component';
import { ApprovedComponent } from './components/approved/approved.component';
import { CanceledComponent } from './components/canceled/canceled.component';
import { DeleteComponent } from './components/delete/delete.component';
import { Delete1Component } from './components/delete1/delete1.component';
import { EditComponent } from './components/edit/edit.component';
import { Edit1Component } from './components/edit1/edit1.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { PendingComponent } from './components/pending/pending.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,HomeComponent,UserComponent,AdminComponent,ListComponent,AddComponent,EditComponent,Edit1Component,DeleteComponent,Delete1Component,PendingComponent,ApprovedComponent,CanceledComponent,SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mytimeaway';
}
