// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DelegationAPI from './delegation';
import {
  Delegation,
  DelegationCreateParams,
  DelegationListParams,
  DelegationListResponse,
  DelegationRead,
} from './delegation';
import * as PrivateKeyAPI from './private-key';
import {
  PrivateKey,
  PrivateKeyDeletePrivateKeyResponse,
  PrivateKeyPrivateKeyParams,
  PrivateKeyPrivateKeyResponse,
  PrivateKeyRetrievePrivateKeyResponse,
} from './private-key';
import * as KeysAPI from './keys/keys';
import { APIKeyDB, KeyCreateParams, KeyCreateResponse, KeyListResponse, Keys } from './keys/keys';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Auth extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  privateKey: PrivateKeyAPI.PrivateKey = new PrivateKeyAPI.PrivateKey(this._client);
  delegation: DelegationAPI.Delegation = new DelegationAPI.Delegation(this._client);

  /**
   * Delete the current user's account and all associated data.
   *
   * This action is irreversible and will:
   *
   * 1. Delete all sessions
   * 2. Delete all API keys
   * 3. Delete private key data (via cascade)
   * 4. Delete automation settings (via cascade)
   * 5. Delete delegation data (via cascade)
   * 6. Delete the user account
   * 7. Delete/deactivate the Cognito identity
   *
   * Requires JWT Bearer authentication.
   *
   * @example
   * ```ts
   * const response = await client.api.v1.auth.deleteRegister();
   * ```
   */
  deleteRegister(options?: RequestOptions): APIPromise<AuthDeleteRegisterResponse> {
    return this._client.delete('/api/v1/auth/register', options);
  }

  /**
   * Get current user information.
   *
   * Requires JWT Bearer authentication with Cognito token. User data is
   * automatically kept up-to-date during authentication.
   *
   * @example
   * ```ts
   * const response = await client.api.v1.auth.retrieveMe();
   * ```
   */
  retrieveMe(options?: RequestOptions): APIPromise<AuthRetrieveMeResponse> {
    return this._client.get('/api/v1/auth/me', options);
  }
}

/**
 * Schema for user deletion response
 */
export interface AuthDeleteRegisterResponse {
  cognito_deletion: { [key: string]: unknown };

  deleted_at: string;

  deleted_data: { [key: string]: unknown };

  message: string;

  user_id: number;
}

export type AuthRetrieveMeResponse = { [key: string]: unknown };

Auth.Keys = Keys;
Auth.PrivateKey = PrivateKey;
Auth.Delegation = Delegation;

export declare namespace Auth {
  export {
    type AuthDeleteRegisterResponse as AuthDeleteRegisterResponse,
    type AuthRetrieveMeResponse as AuthRetrieveMeResponse,
  };

  export {
    Keys as Keys,
    type APIKeyDB as APIKeyDB,
    type KeyCreateResponse as KeyCreateResponse,
    type KeyListResponse as KeyListResponse,
    type KeyCreateParams as KeyCreateParams,
  };

  export {
    PrivateKey as PrivateKey,
    type PrivateKeyDeletePrivateKeyResponse as PrivateKeyDeletePrivateKeyResponse,
    type PrivateKeyPrivateKeyResponse as PrivateKeyPrivateKeyResponse,
    type PrivateKeyRetrievePrivateKeyResponse as PrivateKeyRetrievePrivateKeyResponse,
    type PrivateKeyPrivateKeyParams as PrivateKeyPrivateKeyParams,
  };

  export {
    Delegation as Delegation,
    type DelegationRead as DelegationRead,
    type DelegationListResponse as DelegationListResponse,
    type DelegationCreateParams as DelegationCreateParams,
    type DelegationListParams as DelegationListParams,
  };
}
