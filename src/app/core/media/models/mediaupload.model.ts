/*
 * OrsettoCommerce
 * version 4.5
 * http://www.orsettocommerce.com
 *
 * Copyright (c) 2024 PICCOSOFT
 * Author piccosoft <support@orsettocommerce.com>
 * Licensed under the MIT license.
 */

export class MediauploadForm {
  public image: String;
  public path: string;
  public fileName: string;
  public fileType: number;


  constructor(mediaupload: any) {
    this.image = mediaupload.image || '';
    this.path = mediaupload.path || '';
    this.fileName = mediaupload.fileName || '';
    this.fileType=0
  }
}
