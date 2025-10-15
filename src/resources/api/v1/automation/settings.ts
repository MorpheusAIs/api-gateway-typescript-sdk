// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Settings extends APIResource {
  /**
   * Update automation settings for the authenticated user.
   *
   * @example
   * ```ts
   * const automationSettings =
   *   await client.api.v1.automation.settings.create();
   * ```
   */
  create(body: SettingCreateParams, options?: RequestOptions): APIPromise<AutomationSettings> {
    return this._client.put('/api/v1/automation/settings', { body, ...options });
  }

  /**
   * Get automation settings for the authenticated user.
   *
   * @example
   * ```ts
   * const automationSettings =
   *   await client.api.v1.automation.settings.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<AutomationSettings> {
    return this._client.get('/api/v1/automation/settings', options);
  }
}

export interface AutomationSettings {
  created_at: string;

  updated_at: string;

  user_id: number;

  is_enabled?: boolean | null;

  session_duration?: number | null;
}

export interface SettingCreateParams {
  is_enabled?: boolean | null;

  session_duration?: number | null;
}

export declare namespace Settings {
  export { type AutomationSettings as AutomationSettings, type SettingCreateParams as SettingCreateParams };
}
