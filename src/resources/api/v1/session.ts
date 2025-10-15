// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Session extends APIResource {
  /**
   * Approve the contract to spend MOR tokens on your behalf.
   *
   * Connects to the proxy-router's /blockchain/approve endpoint. For creating
   * sessions, approve enough tokens by calculating: bid_price \* session_duration.
   * Uses the DIAMOND_CONTRACT_ADDRESS environment variable as the spender contract
   * address.
   *
   * @example
   * ```ts
   * const response = await client.api.v1.session.approve({
   *   amount: 0,
   * });
   * ```
   */
  approve(params: SessionApproveParams, options?: RequestOptions): APIPromise<unknown> {
    const { amount } = params;
    return this._client.post('/api/v1/session/approve', { query: { amount }, ...options });
  }

  /**
   * Create a session with a provider using a bid ID and associate it with the API
   * key.
   *
   * This endpoint creates a session and automatically associates it with the API key
   * used for authentication. Each API key can have at most one active session at a
   * time.
   *
   * @example
   * ```ts
   * const response = await client.api.v1.session.bidsession({
   *   bid_id: 'bid_id',
   * });
   * ```
   */
  bidsession(params: SessionBidsessionParams, options?: RequestOptions): APIPromise<unknown> {
    const { bid_id, ...body } = params;
    return this._client.post('/api/v1/session/bidsession', { query: { bid_id }, body, ...options });
  }

  /**
   * Close the session associated with the current API key.
   *
   * @example
   * ```ts
   * const response = await client.api.v1.session.closesession();
   * ```
   */
  closesession(options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/api/v1/session/closesession', options);
  }

  /**
   * Create a session with a provider using a model ID and associate it with the API
   * key.
   *
   * This endpoint creates a session and automatically associates it with the API key
   * used for authentication. Each API key can have at most one active session at a
   * time.
   *
   * @example
   * ```ts
   * const response = await client.api.v1.session.modelsession({
   *   model_id: 'model_id',
   * });
   * ```
   */
  modelsession(params: SessionModelsessionParams, options?: RequestOptions): APIPromise<unknown> {
    const { model_id, ...body } = params;
    return this._client.post('/api/v1/session/modelsession', { query: { model_id }, body, ...options });
  }

  /**
   * Ping the session by attempting a simple chat completion. If the chat completion
   * fails, the session is considered dead and will be closed.
   *
   * @example
   * ```ts
   * const response = await client.api.v1.session.pingsession();
   * ```
   */
  pingsession(options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/api/v1/session/pingsession', options);
  }
}

export interface SessionDataRequest {
  directPayment?: boolean;

  failover?: boolean;

  sessionDuration?: number;
}

export type SessionApproveResponse = unknown;

export type SessionBidsessionResponse = unknown;

export type SessionClosesessionResponse = unknown;

export type SessionModelsessionResponse = unknown;

export type SessionPingsessionResponse = unknown;

export interface SessionApproveParams {
  /**
   * The amount to approve, consider bid price \* duration for sessions
   */
  amount: number;
}

export interface SessionBidsessionParams {
  /**
   * Query param: The blockchain ID (hex) of the bid to create a session for
   */
  bid_id: string;

  /**
   * Body param:
   */
  directPayment?: boolean;

  /**
   * Body param:
   */
  failover?: boolean;

  /**
   * Body param:
   */
  sessionDuration?: number;
}

export interface SessionModelsessionParams {
  /**
   * Query param: The blockchain ID (hex) of the model to create a session for
   */
  model_id: string;

  /**
   * Body param:
   */
  directPayment?: boolean;

  /**
   * Body param:
   */
  failover?: boolean;

  /**
   * Body param:
   */
  sessionDuration?: number;
}

export declare namespace Session {
  export {
    type SessionDataRequest as SessionDataRequest,
    type SessionApproveResponse as SessionApproveResponse,
    type SessionBidsessionResponse as SessionBidsessionResponse,
    type SessionClosesessionResponse as SessionClosesessionResponse,
    type SessionModelsessionResponse as SessionModelsessionResponse,
    type SessionPingsessionResponse as SessionPingsessionResponse,
    type SessionApproveParams as SessionApproveParams,
    type SessionBidsessionParams as SessionBidsessionParams,
    type SessionModelsessionParams as SessionModelsessionParams,
  };
}
