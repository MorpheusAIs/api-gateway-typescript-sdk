// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MorpheusAPIGatewaySDK from 'morpheus-api-gateway-sdk';

const client = new MorpheusAPIGatewaySDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource session', () => {
  // Prism tests are disabled
  test.skip('approve: only required params', async () => {
    const responsePromise = client.api.v1.session.approve({ amount: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('approve: required and optional params', async () => {
    const response = await client.api.v1.session.approve({ amount: 0 });
  });

  // Prism tests are disabled
  test.skip('bidsession: only required params', async () => {
    const responsePromise = client.api.v1.session.bidsession({ bid_id: 'bid_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('bidsession: required and optional params', async () => {
    const response = await client.api.v1.session.bidsession({
      bid_id: 'bid_id',
      directPayment: true,
      failover: true,
      sessionDuration: 0,
    });
  });

  // Prism tests are disabled
  test.skip('closesession', async () => {
    const responsePromise = client.api.v1.session.closesession();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('modelsession: only required params', async () => {
    const responsePromise = client.api.v1.session.modelsession({ model_id: 'model_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('modelsession: required and optional params', async () => {
    const response = await client.api.v1.session.modelsession({
      model_id: 'model_id',
      directPayment: true,
      failover: true,
      sessionDuration: 0,
    });
  });

  // Prism tests are disabled
  test.skip('pingsession', async () => {
    const responsePromise = client.api.v1.session.pingsession();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
