/*
 * OrsettoCommerce
 * version 4.5
 * http://www.orsettocommerce.com
 *
 * Copyright (c) 2024 PICCOSOFT
 * Author piccosoft <support@orsettocommerce.com>
 * Licensed under the MIT license.
 */

export class SearchfolderForm {
  public folderName: string;
  constructor(searchfolder: any) {
    this.folderName = searchfolder.folderName || '';
  }
}
