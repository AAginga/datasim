import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket';
import { TicketService } from './_services/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})

export class TicketsComponent implements OnInit {
    tick: Ticket = new Ticket();
    page = 1;
    ticket: Ticket[];
    ticketype: Ticket[];
    error: any;
    data: any={};
    userphone: any;
    
    constructor(
        private ticketService: TicketService) { }

    ngOnInit() {
        // Get bundle list
        this.getTicketsType();
        this.getTickets();
    }

    getTickets(): void {
        this.ticketService.getTickets().subscribe(
            response => this.getTicketsResponse(response),
            error => this.handleError(error));
    }

    getTicketsType(): void {
        this.ticketService.getTicketsType().subscribe(
            response => this.getTicketsTypeResponse(response),
            error => this.handleError(error));
    }

    protected getTicketsResponse(response: Ticket[]) {
        this.ticket = response;
    }

    protected getTicketsTypeResponse(response: Ticket[]){
        this.ticketype = response;
    }

    protected handleError(error: any) {
        console.error(error);
    }

}





