import { Component, OnInit } from '@angular/core';
import { BuyBundle } from './buy-bundle';
import { BundleHistory } from '../bundle-history/bundle-history';
import { BuyBundleService } from './_services/buy-bundle.service';
import { AuthService } from '../auth/_services/auth.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { AlertService } from 'ngx-alerts';


@Component({
    selector: 'app-buy-bundles',
    templateUrl: './buy-bundles.component.html',
    styleUrls: ['./buy-bundles.component.css']
})


export class BuyBundlesComponent implements OnInit {
    order: BundleHistory = new BundleHistory();
    bundles: BuyBundle[];
    error: any;
    data: any={};
    userphone: any;
    closeResult: string;
    

    constructor(
        private bundleService: BuyBundleService,
        private currentuser : AuthService,
        private modalService: NgbModal,
        private alertService: AlertService) { }

    ngOnInit() {
        // Get bundle list
        this.getBundles();
        this.getCurrentUser();
    }

    getBundles(): void {
        this.bundleService.getBundles().subscribe(
            response => this.handleResponse(response),
            error => this.handleError(error));
    }

    getCurrentUser(): void {
        // retrieving from the storage/
        this.order.phone = this.currentuser.getUser().phone;
    }

    protected handleResponse(response: BuyBundle[]) {
        console.log(response);
        this.bundles = response;
    }

    protected handleError(error: any) {
        console.error(error);
    }

    onSubmit(bundleForm): void {
        this.bundleService.onBuyBundle(this.order).subscribe(
            (response) => { 
                this.data = response;
                this.alertService.info(this.data.message);
           },
            (error) => {
                this.error = error.error;
            }
        );
        // Clear form fields
        bundleForm.reset();
    }

}




