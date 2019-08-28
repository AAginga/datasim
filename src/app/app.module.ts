import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

import { AlertModule } from 'ngx-alerts';

import { HttpHandleErrorService } from './shared/_services/http-handle-error.service'; 

import { HttpInterceptorService } from './shared/_services/http-interceptor.service';

import { AuthGuard } from './auth/_guards/auth.guard';


import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { BlankComponent } from './layouts/blank/blank.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    NavigationComponent,
    BreadcrumbComponent,
    SidebarComponent,
    BlankComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,   
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(Approutes, { useHash: false }),
    AlertModule.forRoot({maxMessages: 5, timeout: 10000, position: 'right'}),  
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
       provide: LocationStrategy,
       useClass: HashLocationStrategy
    },
      AuthGuard,
      HttpHandleErrorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService ,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
