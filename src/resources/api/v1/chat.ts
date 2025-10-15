// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Chat extends APIResource {
  /**
   * Create a chat completion with automatic session creation if enabled.
   *
   * Supports both streaming and non-streaming responses based on the 'stream'
   * parameter. Tool calling is supported but may work better with streaming enabled.
   *
   * @example
   * ```ts
   * const response = await client.api.v1.chat.completions({
   *   messages: [{ role: 'role' }],
   * });
   * ```
   */
  completions(body: ChatCompletionsParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/api/v1/chat/completions', { body, ...options });
  }
}

export type ChatCompletionsResponse = unknown;

export interface ChatCompletionsParams {
  messages: Array<ChatCompletionsParams.Message>;

  frequency_penalty?: number | null;

  max_tokens?: number | null;

  model?: string | null;

  n?: number | null;

  presence_penalty?: number | null;

  /**
   * Optional session ID to use for this request. If not provided, the system will
   * use the session associated with the API key.
   */
  session_id?: string | null;

  stop?: string | Array<string> | null;

  stream?: boolean | null;

  temperature?: number | null;

  /**
   * Explicit tool selection for tool calling.
   */
  tool_choice?: string | ChatCompletionsParams.ToolChoice | null;

  tools?: Array<ChatCompletionsParams.Tool> | null;

  top_p?: number | null;
}

export namespace ChatCompletionsParams {
  /**
   * Represents a single chat message in the OpenAI-compatible schema.
   */
  export interface Message {
    role: string;

    content?: string | null;

    name?: string | null;

    tool_call_id?: string | null;

    tool_calls?: Array<{ [key: string]: unknown }> | null;
  }

  /**
   * Explicit tool selection for tool calling.
   */
  export interface ToolChoice {
    function?: { [key: string]: unknown } | null;

    type?: string | null;
  }

  /**
   * Tool wrapper for function-based tools (OpenAI-compatible).
   */
  export interface Tool {
    /**
     * Function definition for tool calling.
     */
    function: Tool.Function;

    type?: string;
  }

  export namespace Tool {
    /**
     * Function definition for tool calling.
     */
    export interface Function {
      name: string;

      description?: string | null;

      parameters?: { [key: string]: unknown };
    }
  }
}

export declare namespace Chat {
  export {
    type ChatCompletionsResponse as ChatCompletionsResponse,
    type ChatCompletionsParams as ChatCompletionsParams,
  };
}
