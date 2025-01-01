/*
 * OrsettoCommerce
 * version 4.5
 * http://www.orsettocommerce.com
 *
 * Copyright (c) 2024 PICCOSOFT
 * Author piccosoft <support@orsettocommerce.com>
 * Licensed under the MIT license.
 */

export class DeliveryPersonAddModel {
  public locationName: string;
  public zipCode: number;
  constructor(fromDeliveryAdd: any) {
    this.locationName = fromDeliveryAdd.locationName || '';
    this.zipCode = fromDeliveryAdd.zipCode || 0;
  }
}
