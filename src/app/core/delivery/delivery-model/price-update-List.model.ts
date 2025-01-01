/*
 * OrsettoCommerce
 * version 4.5
 * http://www.orsettocommerce.com
 *
 * Copyright (c) 2024 PICCOSOFT
 * Author piccosoft <support@orsettocommerce.com>
 * Licensed under the MIT license.
 */

export class PriceUpdateListResponse {
  public createdDate: string;
  public file: string;
  public filePath: string;
  public title: string;
  public id: number;

  constructor(searchOptionListForm: any) {
    this.createdDate = searchOptionListForm.createdDate || '';
    this.file = searchOptionListForm.file || '';
    this.filePath = searchOptionListForm.filePath || '';
    this.title = searchOptionListForm.title || '';
    this.id = searchOptionListForm.id || '';

  }
}
