/*
 * OrsettoCommerce
 * version 4.5
 * http://www.orsettocommerce.com
 *
 * Copyright (c) 2024 PICCOSOFT
 * Author piccosoft <support@orsettocommerce.com>
 * Licensed under the MIT license.
 */

export class PaymentListModel {
  public limit: number;
  public offset: number;
  public keyword: string;
  public sku: string;
  public status: any;
  public price: number;
  public count: number;

  constructor(fromPaymentList: any) {
    this.limit = fromPaymentList.limit || 0;
    this.offset = fromPaymentList.offset || 0;
    this.keyword = fromPaymentList.keyword || '';
    this.sku = fromPaymentList.sku || '';
    this.status = fromPaymentList.status || '';
    this.price = fromPaymentList.price || '';
    this.count = fromPaymentList.count || 0;
  }
}
