import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BundleHistoryComponent } from './bundle-history.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
          title: 'Bundle History',
          urls: [{title: 'History',url: '/history'},{title: 'Bundle History'}]
      },
    component: BundleHistoryComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BundleHistoryComponent]
})
export class BundleHistoryModule { }





