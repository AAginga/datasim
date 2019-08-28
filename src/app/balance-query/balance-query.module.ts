import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BalanceQueryComponent } from './balance-query.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
          title: 'Balance Query',
          urls: [{title: 'Balance',url: '/balance'},{title: 'Balance Query'}]
      },
    component: BalanceQueryComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BalanceQueryComponent]
})
export class BalanceQueryModule { }

