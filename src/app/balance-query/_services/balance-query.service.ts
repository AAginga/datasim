import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {RequestOptions } from '@angular/http';
import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
import { catchError, map, tap } from 'rxjs/operators';
// App import
import { environment } from './../../../environments/environment';
import { BalanceQuery } from './../../balance-query/balance-query';
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
export class BalanceQueryService {
    private readonly apiUrl = environment.apiUrl;
    private balanceUrl = this.apiUrl + 'invoke';
    private handleError: HandleError;

    constructor( private http: HttpClient,
                httpErrorHandler: HttpHandleErrorService) {
                this.handleError = httpErrorHandler.createHandleError('BalanceQueryService');  
              }

     
     /** GET balance from balance endpoint */
    getBalance (): Observable<any> {
      const request = JSON.stringify(
        { msisdn: '794000001', type: 'SIM_BALANCE' }
        );

      return this.http.post<BalanceQuery>(this.balanceUrl, request)
        .pipe(
          catchError(this.handleError('getBalance'))
        );
    }



}

