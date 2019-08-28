import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket';
import { TicketService } from './_services/ticket.service';
import { AuthService } from '../auth/_services/auth.service';
import { AlertService } from 'ngx-alerts';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-ticketsedit',
  templateUrl: './ticketsedit.component.html',
})
export class TicketseditComponent implements OnInit {
  tick: Ticket = new Ticket();
  ticketype: Ticket[];
  model: any = {};
  editing: boolean = false;
  error: any;
  data: any={};
  
  constructor(
    private ticketService: TicketService,
    private currentuser : AuthService,
    private alertService: AlertService,
    activeRoute: ActivatedRoute) {

     this.editing = activeRoute.snapshot.params["mode"] == "edit";
  }

  ngOnInit() {
    this.getTicketsType();
  }


  getTicketsType(): void {
    this.ticketService.getTicketsType().subscribe(
        response => this.ticketTypeResponse(response),
        error => this.handleError(error));
  }


  protected ticketTypeResponse(response: Ticket[]){
      this.ticketype = response;
  }


  onSubmit(ticketForm): void {
    this.tick.phone = this.currentuser.getUser().phone;
    this.ticketService.postTicket(this.tick).subscribe(
        (response) => { 
            this.data = response;
            this.alertService.info(this.data.message);
       },
        (error) => {
            this.error = error.error;
        }
    );
    // Clear form fields
    ticketForm.reset();
}

protected handleError(error: any) {
  console.error(error);
}


}




 