import { Component, OnInit } from '@angular/core';
import { BuyBundle } from '../buy-bundles/buy-bundle';
import { BuyBundleService } from '../buy-bundles/_services/buy-bundle.service';
import { BalanceQueryService } from '../balance-query/_services/balance-query.service';

import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-balance-query',
  templateUrl: './balance-query.component.html',
  styleUrls: ['./balance-query.component.css']
})
export class BalanceQueryComponent implements OnInit {
    bundles: BuyBundle[];
    error: any;
    balance: any={};

    constructor(  private bundleService: BuyBundleService,
                  private balanceService: BalanceQueryService,
                  private alertService: AlertService) { }

    ngOnInit() {
   //   this.getBalance();
      this.getBundles();
      
    }

    getBundles(): void {
      this.bundleService.getBundles().subscribe(
          response => this.handleBundle(response),
          error => this.handleError(error));
    }

    getBalance(): void {
        this.balanceService.getBalance().subscribe(
            response => this.handleBalance(response),
            error => this.handleError(error));
    } 


    protected handleBundle(response: BuyBundle[]) {
        this.bundles = response;
    }

    protected handleBalance(response: BuyBundleService[]){
        this.balance = response;

    }

    protected handleError(error: any) {
        console.error(error);
    }

}
