// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Health extends APIResource {
  /**
   * Health check endpoint with container diagnostics for deployment monitoring.
   *
   * Returns system health, uptime, and unique container identifier for support and
   * log analysis. Note: No sensitive AWS or hostname information is exposed.
   */
  check(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/health', options);
  }

  /**
   * Detailed model service health check for monitoring and debugging.
   *
   * Returns comprehensive information about the model fetching service, cache
   * status, and available models for operational monitoring.
   */
  modelsCheck(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/health/models', options);
  }
}

export type HealthCheckResponse = unknown;

export type HealthModelsCheckResponse = unknown;

export declare namespace Health {
  export {
    type HealthCheckResponse as HealthCheckResponse,
    type HealthModelsCheckResponse as HealthModelsCheckResponse,
  };
}
