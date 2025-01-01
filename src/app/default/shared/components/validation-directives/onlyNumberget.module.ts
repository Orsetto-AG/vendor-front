/*
 * OrsettoCommerce
 * version 4.5
 * http://www.orsettocommerce.com
 *
 * Copyright (c) 2024 PICCOSOFT
 * Author piccosoft <support@orsettocommerce.com>
 * Licensed under the MIT license.
 */
import { NgModule } from '@angular/core';
import { OnlyNumberDirectives } from './only-number-get.directive';

@NgModule({
  declarations: [OnlyNumberDirectives],
  exports: [OnlyNumberDirectives]
})
export class NumberAcceptgetModule {}
