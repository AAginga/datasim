import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {RequestOptions } from '@angular/http';
import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
import { catchError, map, tap } from 'rxjs/operators';
// App import
import { environment } from './../../../environments/environment';
import { BuyBundle } from './../buy-bundle';
import { BundleHistory } from './../../bundle-history/bundle-history';
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
export class BuyBundleService {
    private readonly apiUrl = environment.apiUrl;
    private bundlesUrl = this.apiUrl + 'payment/products';
    private handleError: HandleError;
    private orderUrl = this.apiUrl + 'payment/order';

    constructor( private http: HttpClient,
                httpErrorHandler: HttpHandleErrorService) {
                this.handleError = httpErrorHandler.createHandleError('BuyBundleService');  
              }

    /** GET bundles from bundles endpoint */
     getBundles(): Observable<BuyBundle[]> {
         return this.http.get<BuyBundle[]>(this.bundlesUrl)
         .pipe(
           catchError(this.handleError('getBundles', []))
         );
     }

  /*  getBundles(): Observable<BuyBundle[]> {
      return this.http.get<BuyBundle[]>("../assets/data/products.json")
      .pipe(
        catchError(this.handleError('getBundles', []))
      );
  } */





    /** POST bundles to bundles endpoint */
   onBuyBundle(order: BuyBundle): Observable<BuyBundle> {
      const request = JSON.stringify(
        { product: order.id, phone: order.phone }
      );
      return this.http.post(this.orderUrl, request)
          .pipe(
              map((response: BuyBundle) => {
                    
                  return response;
              }),
          catchError(this.handleError('onBuyBundle', order))
          );
   } 


}
