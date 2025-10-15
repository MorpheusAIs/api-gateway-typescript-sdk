// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { MorpheusAPIGatewaySDK } from '../client';

export abstract class APIResource {
  protected _client: MorpheusAPIGatewaySDK;

  constructor(client: MorpheusAPIGatewaySDK) {
    this._client = client;
  }
}
