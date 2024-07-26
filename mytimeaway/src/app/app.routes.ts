import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { Edit1Component } from './components/edit1/edit1.component';
import { DeleteComponent } from './components/delete/delete.component';
import { Delete1Component } from './components/delete1/delete1.component';
import { PendingComponent } from './components/pending/pending.component';
import { ApprovedComponent } from './components/approved/approved.component';
import { CanceledComponent } from './components/canceled/canceled.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [

    {
        "path":"",
        "component": HomeComponent,
        "title":"Home"

    },
    {
        "path":"home",
        "component": HomeComponent,
        "title":"Home"

    },
    
    {
        "path":"user",
        "component": UserComponent,
        "title":"user",
        children: [

            {
                "path":"list",
                "component": ListComponent,
                "title":"list"
        
            },
            {
                "path":"add",
                "component": AddComponent,
                "title":"add"
        
            },
            {
                "path":"edit",
                "component": EditComponent,
                "title":"edit"
            },
            {
                "path":"edit1/:id",
                "component": Edit1Component,
                "title":"edited"
            },
            {
                "path":"delete",
                "component": DeleteComponent,
                "title":"delete"
            },
            {
                "path":"delete1/:id",
                "component": Delete1Component,
                "title":"delete"
            }
        ]

    },
    
    {
        "path":"admin",
        "component": AdminComponent,
        "title":"admin",
        children: [
            {
                "path":"list",
                "component": ListComponent,
                "title":"list"
        
            },

            {
                "path":"pending",
                "component": PendingComponent,
                "title":"pending"
        
            },
            {
                "path":"approved",
                "component": ApprovedComponent,
                "title":"approved"
        
            },
            {
                "path":"canceled",
                "component": CanceledComponent,
                "title":"canceled"
        
            },
            {
                "path":"search",
                "component": SearchComponent,
                "title":"search"
        
            },
        ]

    }

];
