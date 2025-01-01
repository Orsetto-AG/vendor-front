/*
 * OrsettoCommerce
 * version 2.2
 * http://www.orsettocommerce.com
 *
 * Copyright (c) 2024 PICCOSOFT
 * Author piccosoft <support@orsettocommerce.com>
 * Licensed under the MIT license.
 */

export class StatusRequest {


    public deliveryId: number;
    public status: number;

     constructor(statusRequest: any) {
         this.deliveryId = statusRequest.deliveryId || '';
         this.status = statusRequest.status || 0;
     }
 }
