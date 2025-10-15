// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Add a message to a chat.
   *
   * @example
   * ```ts
   * const messageResponse =
   *   await client.api.v1.chatHistory.chats.messages.create(
   *     'chat_id',
   *     { content: 'content', role: 'role' },
   *   );
   * ```
   */
  create(chatID: string, body: MessageCreateParams, options?: RequestOptions): APIPromise<MessageResponse> {
    return this._client.post(path`/api/v1/chat-history/chats/${chatID}/messages`, { body, ...options });
  }

  /**
   * Get messages for a specific chat.
   *
   * @example
   * ```ts
   * const messageResponses =
   *   await client.api.v1.chatHistory.chats.messages.list(
   *     'chat_id',
   *   );
   * ```
   */
  list(
    chatID: string,
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageListResponse> {
    return this._client.get(path`/api/v1/chat-history/chats/${chatID}/messages`, { query, ...options });
  }
}

export interface MessageResponse {
  id: string;

  content: string;

  created_at: string;

  role: string;

  sequence: number;

  tokens?: number | null;
}

export type MessageListResponse = Array<MessageResponse>;

export interface MessageCreateParams {
  /**
   * Message content
   */
  content: string;

  /**
   * Message role: 'user' or 'assistant'
   */
  role: string;

  /**
   * Token count for billing
   */
  tokens?: number | null;
}

export interface MessageListParams {
  limit?: number;

  skip?: number;
}

export declare namespace Messages {
  export {
    type MessageResponse as MessageResponse,
    type MessageListResponse as MessageListResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
  };
}
