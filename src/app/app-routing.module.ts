import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

import { AuthGuard } from './auth/_guards/auth.guard';

export const Approutes: Routes = [
{
    path: '',
    component: BlankComponent,
    children: [
        { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
        { path: 'auth', loadChildren: './auth/auth.module#AuthModule'}
    ]
},   

{
    path: '',
    component: FullComponent, canActivate: [ AuthGuard ],
    children: [   
        { path: 'dashboard', loadChildren: './starter/starter.module#StarterModule' },
        { path: 'component', loadChildren: './component/component.module#ComponentsModule' },
        { path: 'users', loadChildren: './users/users.module#UsersModule' },
        { path: 'balance', loadChildren: './balance-query/balance-query.module#BalanceQueryModule' },
        { path: 'bundles', loadChildren: './buy-bundles/buy-bundles.module#BuyBundlesModule' },
        { path: 'history', loadChildren: './bundle-history/bundle-history.module#BundleHistoryModule' },
        { path: 'agents', loadChildren: './agents/agents.module#AgentsModule' },
        { path: 'tickets', loadChildren: './tickets/tickets.module#TicketsModule' },
    ]
},    
     
{
    path: '**',
    redirectTo: '/auth/404' 
}];


