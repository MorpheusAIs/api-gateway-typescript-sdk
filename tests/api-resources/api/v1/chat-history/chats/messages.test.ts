// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MorpheusAPIGatewaySDK from 'morpheus-api-gateway-sdk';

const client = new MorpheusAPIGatewaySDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.v1.chatHistory.chats.messages.create('chat_id', {
      content: 'content',
      role: 'role',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.api.v1.chatHistory.chats.messages.create('chat_id', {
      content: 'content',
      role: 'role',
      tokens: 0,
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.api.v1.chatHistory.chats.messages.list('chat_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v1.chatHistory.chats.messages.list(
        'chat_id',
        { limit: 0, skip: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(MorpheusAPIGatewaySDK.NotFoundError);
  });
});
