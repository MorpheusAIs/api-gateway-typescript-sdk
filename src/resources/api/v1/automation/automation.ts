// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SettingsAPI from './settings';
import { AutomationSettings, SettingCreateParams, Settings } from './settings';

export class Automation extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

Automation.Settings = Settings;

export declare namespace Automation {
  export {
    Settings as Settings,
    type AutomationSettings as AutomationSettings,
    type SettingCreateParams as SettingCreateParams,
  };
}
