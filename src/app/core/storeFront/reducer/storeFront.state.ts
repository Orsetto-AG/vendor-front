/*
 * orsettocommerce
 * version 4.5
 * http://www.orsettocommerce.com
 *
 * Copyright (c) 2024 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Map, Record } from 'immutable';

export interface StoreFrontState extends Map<string, any> {
  wishlistCount: number;
  profile: any;

  wishlistCountLoading: boolean;
  wishlistCountLoaded: boolean;
  wishlistCountFailed: boolean;

  getProfileLoading: boolean;
  profileValid: boolean;
  getProfileLoaded: boolean;
  getProfileFailed: boolean;

  settings: any;
  getSettingLoading: boolean;
  getSettingLoaded: boolean;
  getSettingFailed: boolean;




}

export const StoreFrontRecord = Record({
  wishlistCount: 0,
  profile: null,

  wishlistCountLoading: false,
  wishlistCountLoaded: false,
  wishlistCountFailed: false,

  profileValid: false,
  getProfileLoading: false,
  getProfileLoaded: false,
  getProfileFailed: false,

  settings: {},
  getSettingLoading: false,
  getSettingLoaded: false,
  getSettingFailed: false,

  
});
