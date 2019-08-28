import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  {
	path: '',
	data: {
        title: 'Users List',
        urls: [{title: 'Users',url: '/users'},{title: 'Users List'}]
    },
	component: UsersComponent
  },{
	path: 'create',
	data: {
        title: '',
        urls: [{title: 'Users',url: '/create'},{title: 'Create'}]
    },
	component: UsersComponent
}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
