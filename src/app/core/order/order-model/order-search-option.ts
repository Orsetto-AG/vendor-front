/*
 * OrsettoCommerce
 * version 4.5
 * http://www.orsettocommerce.com
 *
 * Copyright (c) 2024 PICCOSOFT
 * Author piccosoft <support@orsettocommerce.com>
 * Licensed under the MIT license.
 */

export class OrderSearchOptionModel {
  public name: string;
  public optionId: number;

  constructor(orderSearchResponse: any) {
    this.name = orderSearchResponse.name || '';
    this.optionId = orderSearchResponse.optionId || 0;
  }
}
