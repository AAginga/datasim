import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BuyBundlesComponent } from './buy-bundles.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    data: {
          title: 'Buy Bundles',
          urls: [{title: 'Bundles',url: '/bundles'},{title: 'Buy Bundles'}]
      },
    component: BuyBundlesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuyBundlesComponent]
})
export class BuyBundlesModule { }






