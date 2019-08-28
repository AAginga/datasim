import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
// App imports
import { AuthService } from '../_services/auth.service';
import { User } from '../user';

import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  user: User = new User();
  error: any;
  data: any={};
  returnUrl: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService) { }

  ngOnInit() {
    // Set the return url
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/auth/login';
  }

  ngAfterViewInit() {
    $(function() {
        $(".preloader").fadeOut();
    });

  }

  onSubmit(loginForm): void {
      this.authService.onLogin(this.user).subscribe(
        (response) => { 
            this.data = response;
            this.alertService.info(this.data.message);
            if (this.data.token) {
                this.router.navigate(['dashboard']);
            }else {
              // get return url from route parameters or default to '/'
               this.router.navigate([this.returnUrl]);
            }
        },
        (error) => {
            this.error = error.error;
        }
      );
      // Clear form fields
      loginForm.reset();
  }

}


