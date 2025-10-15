// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as DefaultAPI from './default';
import { Default, DefaultRetrieveDecryptedResponse } from './default';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Keys extends APIResource {
  default: DefaultAPI.Default = new DefaultAPI.Default(this._client);

  /**
   * Create a new API key for the current user.
   *
   * Requires JWT Bearer authentication with the token received from the login
   * endpoint.
   *
   * @example
   * ```ts
   * const key = await client.api.v1.auth.keys.create();
   * ```
   */
  create(body: KeyCreateParams, options?: RequestOptions): APIPromise<KeyCreateResponse> {
    return this._client.post('/api/v1/auth/keys', { body, ...options });
  }

  /**
   * Get all API keys for the current user.
   *
   * Requires JWT Bearer authentication with the token received from the login
   * endpoint.
   *
   * @example
   * ```ts
   * const apiKeyDBs = await client.api.v1.auth.keys.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<KeyListResponse> {
    return this._client.get('/api/v1/auth/keys', options);
  }

  /**
   * Deactivate an API key.
   *
   * Requires JWT Bearer authentication with the token received from the login
   * endpoint.
   *
   * @example
   * ```ts
   * const apiKeyDB = await client.api.v1.auth.keys.delete(0);
   * ```
   */
  delete(keyID: number, options?: RequestOptions): APIPromise<APIKeyDB> {
    return this._client.delete(path`/api/v1/auth/keys/${keyID}`, options);
  }

  /**
   * Get the first (oldest) active API key for the current user. This is used for
   * automatic API key selection on login.
   *
   * Requires JWT Bearer authentication with the token received from the login
   * endpoint.
   *
   * @example
   * ```ts
   * const apiKeyDB =
   *   await client.api.v1.auth.keys.retrieveFirst();
   * ```
   */
  retrieveFirst(options?: RequestOptions): APIPromise<APIKeyDB | null> {
    return this._client.get('/api/v1/auth/keys/first', options);
  }
}

/**
 * Schema for API key in database response.
 */
export interface APIKeyDB {
  id: number;

  created_at: string;

  is_active: boolean;

  key_prefix: string;

  encrypted_key?: string | null;

  encryption_version?: number;

  is_default?: boolean;

  name?: string | null;
}

/**
 * Schema for API key response.
 */
export interface KeyCreateResponse {
  key: string;

  key_prefix: string;

  name?: string | null;
}

export type KeyListResponse = Array<APIKeyDB>;

export interface KeyCreateParams {
  name?: string | null;
}

Keys.Default = Default;

export declare namespace Keys {
  export {
    type APIKeyDB as APIKeyDB,
    type KeyCreateResponse as KeyCreateResponse,
    type KeyListResponse as KeyListResponse,
    type KeyCreateParams as KeyCreateParams,
  };

  export { Default as Default, type DefaultRetrieveDecryptedResponse as DefaultRetrieveDecryptedResponse };
}
