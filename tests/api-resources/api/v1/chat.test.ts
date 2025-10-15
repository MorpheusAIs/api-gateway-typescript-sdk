// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MorpheusAPIGatewaySDK from 'morpheus-api-gateway-sdk';

const client = new MorpheusAPIGatewaySDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chat', () => {
  // Prism tests are disabled
  test.skip('completions: only required params', async () => {
    const responsePromise = client.api.v1.chat.completions({ messages: [{ role: 'role' }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('completions: required and optional params', async () => {
    const response = await client.api.v1.chat.completions({
      messages: [
        {
          role: 'role',
          content: 'content',
          name: 'name',
          tool_call_id: 'tool_call_id',
          tool_calls: [{ foo: 'bar' }],
        },
      ],
      frequency_penalty: 0,
      max_tokens: 0,
      model: 'model',
      n: 0,
      presence_penalty: 0,
      session_id: 'session_id',
      stop: 'string',
      stream: true,
      temperature: 0,
      tool_choice: 'string',
      tools: [
        { function: { name: 'name', description: 'description', parameters: { foo: 'bar' } }, type: 'type' },
      ],
      top_p: 0,
    });
  });
});
