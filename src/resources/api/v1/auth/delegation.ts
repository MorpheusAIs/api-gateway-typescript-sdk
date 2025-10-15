// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Delegation extends APIResource {
  /**
   * Allows an authenticated user to store a signed delegation. The frontend should
   * construct and sign the delegation using the Gator SDK.
   *
   * @example
   * ```ts
   * const delegationRead =
   *   await client.api.v1.auth.delegation.create({
   *     delegate_address: 'delegate_address',
   *     signed_delegation_data: 'signed_delegation_data',
   *   });
   * ```
   */
  create(body: DelegationCreateParams, options?: RequestOptions): APIPromise<DelegationRead> {
    return this._client.post('/api/v1/auth/delegation', { body, ...options });
  }

  /**
   * Retrieves the user's stored delegations.
   *
   * @example
   * ```ts
   * const delegationReads =
   *   await client.api.v1.auth.delegation.list();
   * ```
   */
  list(
    query: DelegationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DelegationListResponse> {
    return this._client.get('/api/v1/auth/delegation', { query, ...options });
  }

  /**
   * Deletes a specific delegation for the user. Alternatively, could just mark it
   * inactive.
   *
   * @example
   * ```ts
   * await client.api.v1.auth.delegation.delete(0);
   * ```
   */
  delete(delegationID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/auth/delegation/${delegationID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves the user's currently active delegation, if any.
   *
   * @example
   * ```ts
   * const delegationRead =
   *   await client.api.v1.auth.delegation.retrieveActive();
   * ```
   */
  retrieveActive(options?: RequestOptions): APIPromise<DelegationRead | null> {
    return this._client.get('/api/v1/auth/delegation/active', options);
  }
}

export interface DelegationRead {
  id: number;

  created_at: string;

  delegate_address: string;

  signed_delegation_data: string;

  user_id: number;

  expiry?: string | null;

  is_active?: boolean;
}

export type DelegationListResponse = Array<DelegationRead>;

export interface DelegationCreateParams {
  delegate_address: string;

  signed_delegation_data: string;

  expiry?: string | null;

  is_active?: boolean;
}

export interface DelegationListParams {
  limit?: number;

  skip?: number;
}

export declare namespace Delegation {
  export {
    type DelegationRead as DelegationRead,
    type DelegationListResponse as DelegationListResponse,
    type DelegationCreateParams as DelegationCreateParams,
    type DelegationListParams as DelegationListParams,
  };
}
