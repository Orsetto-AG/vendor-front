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
import { AlphabetOnlyDirective, OnlyNumberDirective,NoSpecialCharsDirective } from './only-number.directive';
import { NoNegativeAndZeroDirective } from './no-negative-and-zero.directive';
import { NoSpecialCharDirective } from './no-special-char.directive';

@NgModule({
  declarations: [OnlyNumberDirective, AlphabetOnlyDirective,NoSpecialCharsDirective,NoNegativeAndZeroDirective,NoSpecialCharDirective],
  exports: [OnlyNumberDirective, AlphabetOnlyDirective,NoSpecialCharsDirective,NoNegativeAndZeroDirective,NoSpecialCharDirective]
})
export class NumberAcceptModule {}
