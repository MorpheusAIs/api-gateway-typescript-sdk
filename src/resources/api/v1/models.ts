// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Models extends APIResource {
  /**
   * Get a list of active models.
   *
   * Response is in OpenAI API format with selected fields from the blockchain data.
   * Only returns active models with available providers.
   *
   * @example
   * ```ts
   * const models = await client.api.v1.models.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/api/v1/models', options);
  }

  /**
   * Get a list of all available models.
   *
   * Response is in OpenAI API format with selected fields from the blockchain data.
   * Only returns non-deleted models.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v1.models.retrieveAllmodels();
   * ```
   */
  retrieveAllmodels(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/api/v1/models/allmodels', options);
  }

  /**
   * Get rated bids for a specific model.
   *
   * Connects to the proxy-router's /blockchain/models/{id}/bids/rated endpoint.
   * Note: Use the blockchain model ID (hex) not the name.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v1.models.retrieveRatedbids({
   *     model_id: 'model_id',
   *   });
   * ```
   */
  retrieveRatedbids(query: ModelRetrieveRatedbidsParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/api/v1/models/ratedbids', { query, ...options });
  }
}

export type ModelListResponse = unknown;

export type ModelRetrieveAllmodelsResponse = unknown;

export type ModelRetrieveRatedbidsResponse = unknown;

export interface ModelRetrieveRatedbidsParams {
  /**
   * The blockchain ID (hex) of the model to get rated bids for, e.g. 0x1234...
   */
  model_id: string;
}

export declare namespace Models {
  export {
    type ModelListResponse as ModelListResponse,
    type ModelRetrieveAllmodelsResponse as ModelRetrieveAllmodelsResponse,
    type ModelRetrieveRatedbidsResponse as ModelRetrieveRatedbidsResponse,
    type ModelRetrieveRatedbidsParams as ModelRetrieveRatedbidsParams,
  };
}
