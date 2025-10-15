// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class APIInfo extends APIResource {
  /**
   * Root endpoint returning basic API information.
   */
  retrieve(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/', options);
  }
}

export type APIInfoRetrieveResponse = unknown;

export declare namespace APIInfo {
  export { type APIInfoRetrieveResponse as APIInfoRetrieveResponse };
}
