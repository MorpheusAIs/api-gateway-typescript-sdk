// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class PrivateKey extends APIResource {
  /**
   * Delete a user's private key.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v1.auth.privateKey.deletePrivateKey();
   * ```
   */
  deletePrivateKey(options?: RequestOptions): APIPromise<PrivateKeyDeletePrivateKeyResponse> {
    return this._client.delete('/api/v1/auth/private-key', options);
  }

  /**
   * Store an encrypted blockchain private key for the authenticated user. Replaces
   * any existing key.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v1.auth.privateKey.privateKey({
   *     private_key: 'private_key',
   *   });
   * ```
   */
  privateKey(
    body: PrivateKeyPrivateKeyParams,
    options?: RequestOptions,
  ): APIPromise<PrivateKeyPrivateKeyResponse> {
    return this._client.post('/api/v1/auth/private-key', { body, ...options });
  }

  /**
   * Check if a user has a private key registered. Does not return the actual key,
   * only status information.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v1.auth.privateKey.retrievePrivateKey();
   * ```
   */
  retrievePrivateKey(options?: RequestOptions): APIPromise<PrivateKeyRetrievePrivateKeyResponse> {
    return this._client.get('/api/v1/auth/private-key', options);
  }
}

export type PrivateKeyDeletePrivateKeyResponse = { [key: string]: unknown };

export type PrivateKeyPrivateKeyResponse = { [key: string]: unknown };

/**
 * Schema for private key status response
 */
export interface PrivateKeyRetrievePrivateKeyResponse {
  has_key: boolean;

  created_at?: string | null;

  updated_at?: string | null;
}

export interface PrivateKeyPrivateKeyParams {
  /**
   * User's blockchain private key
   */
  private_key: string;
}

export declare namespace PrivateKey {
  export {
    type PrivateKeyDeletePrivateKeyResponse as PrivateKeyDeletePrivateKeyResponse,
    type PrivateKeyPrivateKeyResponse as PrivateKeyPrivateKeyResponse,
    type PrivateKeyRetrievePrivateKeyResponse as PrivateKeyRetrievePrivateKeyResponse,
    type PrivateKeyPrivateKeyParams as PrivateKeyPrivateKeyParams,
  };
}
