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


    public productId: number;
    public status: number;

     constructor(statusRequest: any) {
         this.productId = statusRequest.productId || '';
         this.status = statusRequest.status || 0;
     }
 }
