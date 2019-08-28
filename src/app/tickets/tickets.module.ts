import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets.component';
import { TicketseditComponent } from './ticketsedit.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    data: {
          title: 'Tickets',
          urls: [{title: 'Tickets',url: '/tickets'},{title: 'Tickets'}]
      },
    component: TicketsComponent
  },{
    path: ':mode',
    data: {
          title: 'Create Ticket',
          urls: [{title: 'Tickets',url: '/tickets'},{title: 'Create Ticket'}]
      },
    component: TicketseditComponent
 },{
    path: ':mode/:id',
    data: {
          title: 'Edit Agent',
          urls: [{title: 'Agents',url: '/agents'},{title: 'Edit Agent'}]
      },
    component: TicketsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TicketsComponent,TicketseditComponent],
})
export class TicketsModule { }














