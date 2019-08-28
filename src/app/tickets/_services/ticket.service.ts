import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { AuthService } from './../../auth/_services/auth.service';
import { Ticket } from './../ticket';
import { HttpHandleErrorService, HandleError } from './../../shared/_services/http-handle-error.service';


// Setup headers
const httpOptions = {
  headers: new HttpHeaders({
   'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class TicketService {
    private readonly apiUrl = environment.apiUrl;
    private getticketsUrl = this.apiUrl + 'ticket/phone/';
    private getticketsType = this.apiUrl + 'ticket/type';
    private postticketsUrl = this.apiUrl + 'ticket/add';
    private handleError: HandleError;
    private userphone: any={};
    

    constructor( private http: HttpClient, httpErrorHandler: HttpHandleErrorService , currentuser : AuthService) {
          this.handleError = httpErrorHandler.createHandleError('TicketService');
          this.userphone = currentuser.getUser().phone;
      }


   /** GET tickets from tickets endpoint */
    getTickets(): Observable<Ticket[]> {     
        return this.http.get<Ticket[]>(this.getticketsUrl + this.userphone)
        .pipe(
          catchError(this.handleError('getTickets', []))
        );
    }


    /** GET tickets type from tickets endpoint */
    getTicketsType(): Observable<Ticket[]> {
      return this.http.get<Ticket[]>(this.getticketsType)
      .pipe(
        catchError(this.handleError('getTicketsType', []))
      );
  }


    /** POST ticket to tickets endpoint */
   postTicket(tick: Ticket): Observable<Ticket> {
      const request = JSON.stringify(
        { phone: tick.phone, subject: tick.subject, message: tick.message, type: tick.type  }
      );
      return this.http.post(this.postticketsUrl, request)
          .pipe(
              map((response: Ticket) => {
                    
                  return response;
              }),
          catchError(this.handleError('postTicket', tick))
          );
   } 

}




