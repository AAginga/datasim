import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
// App imports
import { User } from '../user';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    user: User = new User();
    error: any;
    data: any={};
    registerForm: FormGroup;

    constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
         this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.registerForm = this.fb.group({
          idno: [this.user.idno,Validators.compose([Validators.required])],
          phone: [this.user.phone,Validators.compose([Validators.required, Validators.minLength(10) ])],
          password: [this.user.password,Validators.compose([Validators.required, Validators.minLength(6)])],
        });
    }

  /*  onSubmit(): void {
      this.authService.onRegister(this.registerForm.value).subscribe(
          (response) => {
              console.log(response);
            //  this.router.navigate(['/dashboard/dashboard1']);
          },
          (response) => {
              if (response.status === 200){
                console.log(response);
                //  this.router.navigate(['/dashboard/dashboard1']);
              } else if (response.status === 422) {
              Object.keys(response.error).map((err) => {
                    this.error = `${response.error[err]}`;
              });

              } else {
              this.error = response.error;
              }
          }
      );
    } */


    onSubmit(): void {
      this.authService.onRegister(this.registerForm.value).subscribe(
        (response) => { 
            this.data = response;
            if (this.data.status == 200) {
                this.router.navigate(['dashboard']);
            } else if (this.data.status === 422) {
               Object.keys(this.data.error).map((err) => {
                      this.error = `${this.data.error[err]}`;
                });    
            }else {
              // get return url from route parameters or default to '/'
               this.router.navigate(['register']);
            }
        },
        (error) => {
            this.error = error.error;
        }
      );
      // Clear form fields
      this.registerForm.reset();
  }

}

