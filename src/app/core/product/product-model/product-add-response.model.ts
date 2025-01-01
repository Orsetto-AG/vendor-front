/*
 * OrsettoCommerce
 * version 4.5
 * http://www.orsettocommerce.com
 *
 * Copyright (c) 2024 PICCOSOFT
 * Author piccosoft <support@orsettocommerce.com>
 * Licensed under the MIT license.
 */

export class ProductAddResponseModel {
  public name: string;
  public description: string;
  public sku: string;
  public upc: string;
  public location: string;
  public quantity: string;
  public price: string;
  public minimumQuantity: string;
  public subtractStock: string;
  public stockStatusId: string;
  public shipping: string;
  public dateAvailable: string;
  public metaTagTitle: string;
  public condition: string;
  public manufacturerId: string;
  public isActive: string;
  public sortOrder: string;
  public createdDate: string;
  public productId: string;
  public productVideo: any;

  constructor(productaddResponse: any) {
    this.name = productaddResponse.name || '';
    this.description = productaddResponse.description || '';
    this.sku = productaddResponse.sku || '';
    this.upc = productaddResponse.upc || '';
    this.location = productaddResponse.location || '';
    this.quantity = productaddResponse.quantity || '';
    this.price = productaddResponse.price || '';
    this.minimumQuantity = productaddResponse.minimumQuantity || '';
    this.subtractStock = productaddResponse.subtractStock || '';
    this.stockStatusId = productaddResponse.stockStatusId || '';
    this.shipping = productaddResponse.shipping || '';
    this.dateAvailable = productaddResponse.dateAvailable || '';
    this.metaTagTitle = productaddResponse.metaTagTitle || '';
    this.condition = productaddResponse.condition || '';
    this.manufacturerId = productaddResponse.manufacturerId || '';
    this.isActive = productaddResponse.isActive || '';
    this.sortOrder = productaddResponse.sortOrder || '';
    this.createdDate = productaddResponse.createdDate || '';
    this.productId = productaddResponse.productId || '';
    this.productVideo = productaddResponse.productVideo || {};
  }
}
