import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
// import {RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';  //Reactive Extensions Library for Javascript
import { catchError, map, tap } from 'rxjs/operators';

// App imports
import { environment } from '../../../environments/environment';
import { User } from '../user';


// Setup headers
// const httpOptions = {
//      headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//      })
// };

@Injectable({
  providedIn: 'root'
})


export class AuthService {

    public currentUser: User;
    private readonly apiUrl = environment.apiUrl;
    private registerUrl = this.apiUrl + '/subscriber/register';
    private loginUrl = this.apiUrl + '/subscriber/login';
    
    constructor(
        private http: HttpClient,
        private router: Router) { }

    onRegister(user: User): Observable<User> {
          const request = JSON.stringify(
                { idno: user.idno, phone: user.phone, password:user.password }
          );
          return this.http.post(this.registerUrl, request)
            .pipe(
                map((response: User) => {
                    // Receive jwt token in the response
                    const token: string = response['token'];
                    // If we have a token, proceed
                    if (token) {
                        this.setToken(token);
                    //    this.getUser().subscribe();
                    }
                    return response;
                }),
                catchError(error => this.handleError(error))
            );
    } 

    onLogin(user: User): Observable<User> {
        // let requestOptions = new RequestOptions({ headers:null, withCredentials: 
        //     true });
            const request = JSON.stringify(
            { phone: user.phone, password: user.password }
            );
            return this.http.post(this.loginUrl, request)
                .pipe(
                    map((response: User) => {
                            // Receive token in the response
                            const token: string = response['token'];
                            
                            // If we have a token, proceed
                            if (token) {
                                this.setToken(token);
                                localStorage.setItem('currentUser', JSON.stringify(response));  
                            }
                            return response;
                    }),
                catchError(error => this.handleError(error))
                );
    }


    onLogout(){
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        this.router.navigate(['/auth/login']);       
    }


    setToken(token: string): void {
      return localStorage.setItem('token', token );
    }
    
    getToken(): string {
      return localStorage.getItem('token');
    }

   getUser() {
       this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return this.currentUser;
    } 

    isAuthenticated(): boolean {
        // get the token
        const token: string = this.getToken();
        if (token) {
            return true;
        }
            return false;
      }

    private handleError(error: HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
              // A client-side error.
              console.error('An error occurred:',error.error.message);
          } else {
              // The backend error.
              return throwError(error);
          }
            // return a custom error message
            return throwError('Ohps something wrong happen here; please try again later.');
    }  
}

