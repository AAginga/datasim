import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from './../auth/_services/auth.service';
@Component({
	templateUrl: './starter.component.html'
})
export class StarterComponent implements OnInit, AfterViewInit {
	user: any ={};	
	public constructor(
		public auth: AuthService) { }

	ngOnInit() {
		this.user = this.auth.getUser();
		
	}		

	ngAfterViewInit(){}
}
