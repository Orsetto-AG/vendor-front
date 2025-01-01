/*
 * OrsettoCommerce
 * version 4.5
 * http://www.orsettocommerce.com
 *
 * Copyright (c) 2024 PICCOSOFT
 * Author piccosoft <support@orsettocommerce.com>
 * Licensed under the MIT license.
 */

export class PaymentSearchOptionModel {
  public name: string;
  public optionId: number;

  constructor(paymentSearchResponse: any) {
    this.name = paymentSearchResponse.name || '';
    this.optionId = paymentSearchResponse.optionId || 0;
  }
}
