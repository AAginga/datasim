import { Injectable } from '@angular/core';
import { HttpEvent, HttpHeaders, HttpInterceptor, HttpHandler,HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

  // App import
import { AuthService } from '../../auth/_services/auth.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor( public auth: AuthService,
               private router:Router ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
             console.log('interceptor running');

            // Get the token from auth service.
            const authToken = this.auth.getToken();
            if (authToken) {
                // Clone the request to add the new header.
                const authReq = req.clone(
                  { headers: req.headers.set('Authorization', `Bearer ${authToken}`)}
                ); 

            /*    req = req.clone({ headers: req.headers.set('Authorization', `Bearer ${authToken}`) });
                req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
                req = req.clone({ headers: req.headers.set('Content-type', 'application/json') });*/

                console.log('interceptor running with new headers');
                // send the newly created request
                return next.handle(authReq).pipe(
                    tap((event: HttpEvent<any>) => {
                          if (event instanceof HttpResponse) {
                          // Response with HttpResponse type
                          console.log('TAP function',event);
                          }
                      }, (err: any) => {
                            console.log(err);
                          if (err instanceof HttpErrorResponse) {
                              if (err.status === 401) {
                                  localStorage.removeItem('token');
                                  this.router.navigate(['/']);
                              }
                          }
                    })
                );
         } else {
          console.log('interceptor without changes');
          return next.handle(req);
        }
         }  

    /*     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            const token = this.auth.getToken();
    
            if (token) {
                request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
            }
    
            if (!request.headers.has('Content-Type')) {
                request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
            }
    
            request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    
            return next.handle(request).pipe(
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        console.log('TAP function', event);
                    }
                    return event;
                }));
         }  */

}


