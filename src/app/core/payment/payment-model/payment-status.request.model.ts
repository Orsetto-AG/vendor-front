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


    public paymentId: number;
    public status: number;

     constructor(statusRequest: any) {
         this.paymentId = statusRequest.paymentId || '';
         this.status = statusRequest.status || 0;
     }
 }
