import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonSandbox } from '../../../../../../../src/app/core/common/common.sandbox';
import { Subscription } from 'rxjs';
import { ApprovalFlagService } from '../../../../../../../src/app/default/shared/components/approvalServices/approval-flag.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public status: any
  allowUnapprovedSeller: any;
  arr: any = ['add-supplier', 'edit']
  // Subscriptions
  private subscriptions: Subscription = new Subscription();
  constructor(public router: ActivatedRoute, public route: Router, public commonSandbox: CommonSandbox, public approvalService: ApprovalFlagService) { }

  ngOnInit(): void {
    this.router.snapshot.routeConfig.children.forEach((val) => {
      if (this.arr.includes(val?.data?.ActiveStatus)) {
        this.status = 'active'
      }
    })

    // Approval Status from services
    let setting = JSON.parse(localStorage.getItem('vendor-settings'))
    // Approval Status from services
    this.approvalService.mySubject$.subscribe((value: any) => {
      if (setting?.kycMandate == 1) {
        this.allowUnapprovedSeller = value?.approvalStatus;
      } else {
        this.allowUnapprovedSeller = false;
      }
    });

    // let settingData =JSON.parse(localStorage.getItem('vendor-settings'))
    // let VendorData=JSON.parse(localStorage.getItem('vendorUser'))
    // this.allowUnapprovedSeller = [0,2,3].includes(VendorData.approvalFlag) &&settingData.allowUnapprovedSeller == 0 ? true : false;


  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }
}