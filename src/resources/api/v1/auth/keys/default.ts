// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as KeysAPI from './keys';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Default extends APIResource {
  /**
   * Set an API key as the user's default. Clears any existing default.
   *
   * Requires JWT Bearer authentication with the token received from the login
   * endpoint.
   *
   * @example
   * ```ts
   * const apiKeyDB =
   *   await client.api.v1.auth.keys.default.create(0);
   * ```
   */
  create(keyID: number, options?: RequestOptions): APIPromise<KeysAPI.APIKeyDB> {
    return this._client.put(path`/api/v1/auth/keys/${keyID}/default`, options);
  }

  /**
   * Get the user's default API key. If no default is set, returns the first (oldest)
   * active API key. This respects user preference for default key selection.
   *
   * Requires JWT Bearer authentication with the token received from the login
   * endpoint.
   *
   * @example
   * ```ts
   * const apiKeyDB =
   *   await client.api.v1.auth.keys.default.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<KeysAPI.APIKeyDB | null> {
    return this._client.get('/api/v1/auth/keys/default', options);
  }

  /**
   * Get the user's default API key with the full decrypted key for auto-selection.
   *
   * This endpoint returns the full API key to enable seamless Chat/Test access. The
   * key is decrypted using the user's Cognito data for security.
   *
   * Requires JWT Bearer authentication with the token received from the login
   * endpoint.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v1.auth.keys.default.retrieveDecrypted();
   * ```
   */
  retrieveDecrypted(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/api/v1/auth/keys/default/decrypted', options);
  }
}

export type DefaultRetrieveDecryptedResponse = unknown;

export declare namespace Default {
  export { type DefaultRetrieveDecryptedResponse as DefaultRetrieveDecryptedResponse };
}
