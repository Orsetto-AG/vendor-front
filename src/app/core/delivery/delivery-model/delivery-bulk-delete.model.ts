/*
 * OrsettoCommerce
 * version 4.5
 * http://www.orsettocommerce.com
 *
 * Copyright (c) 2024 PICCOSOFT
 * Author piccosoft <support@orsettocommerce.com>
 * Licensed under the MIT license.
 */

export class DeliveryBulkDeleteModel {
  public deliveryId: number;

  constructor(deliverydeleteForm: any) {
    this.deliveryId = deliverydeleteForm.deliveryId || '';
  }
}
