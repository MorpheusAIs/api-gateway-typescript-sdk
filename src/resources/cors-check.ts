// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class CorsCheck extends APIResource {
  /**
   * CORS configuration test endpoint for ALB lb_cookie stickiness verification.
   *
   * This endpoint helps verify that CORS is properly configured for cross-origin
   * requests with credentials, which is required for AWS ALB sticky sessions.
   *
   * Returns CORS configuration details and request information for debugging.
   */
  verify(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/cors-check', options);
  }
}

export type CorsCheckVerifyResponse = unknown;

export declare namespace CorsCheck {
  export { type CorsCheckVerifyResponse as CorsCheckVerifyResponse };
}
