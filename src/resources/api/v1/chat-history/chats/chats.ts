// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as MessagesAPI from './messages';
import {
  MessageCreateParams,
  MessageListParams,
  MessageListResponse,
  MessageResponse,
  Messages,
} from './messages';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Chats extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Create a new chat conversation.
   *
   * @example
   * ```ts
   * const chatResponse =
   *   await client.api.v1.chatHistory.chats.create({
   *     title: 'title',
   *   });
   * ```
   */
  create(body: ChatCreateParams, options?: RequestOptions): APIPromise<ChatResponse> {
    return this._client.post('/api/v1/chat-history/chats', { body, ...options });
  }

  /**
   * Get a specific chat with all messages.
   *
   * @example
   * ```ts
   * const chat = await client.api.v1.chatHistory.chats.retrieve(
   *   'chat_id',
   * );
   * ```
   */
  retrieve(chatID: string, options?: RequestOptions): APIPromise<ChatRetrieveResponse> {
    return this._client.get(path`/api/v1/chat-history/chats/${chatID}`, options);
  }

  /**
   * Update chat title.
   *
   * @example
   * ```ts
   * const chatResponse =
   *   await client.api.v1.chatHistory.chats.update('chat_id', {
   *     title: 'title',
   *   });
   * ```
   */
  update(chatID: string, body: ChatUpdateParams, options?: RequestOptions): APIPromise<ChatResponse> {
    return this._client.put(path`/api/v1/chat-history/chats/${chatID}`, { body, ...options });
  }

  /**
   * Get all chats for the current user.
   *
   * @example
   * ```ts
   * const chatResponses =
   *   await client.api.v1.chatHistory.chats.list();
   * ```
   */
  list(
    query: ChatListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChatListResponse> {
    return this._client.get('/api/v1/chat-history/chats', { query, ...options });
  }

  /**
   * Delete or archive a chat.
   *
   * @example
   * ```ts
   * await client.api.v1.chatHistory.chats.delete('chat_id');
   * ```
   */
  delete(
    chatID: string,
    params: ChatDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { archive_only } = params ?? {};
    return this._client.delete(path`/api/v1/chat-history/chats/${chatID}`, {
      query: { archive_only },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ChatResponse {
  id: string;

  created_at: string;

  title: string;

  updated_at: string;

  message_count?: number | null;
}

export interface ChatRetrieveResponse {
  id: string;

  created_at: string;

  title: string;

  updated_at: string;

  messages?: Array<MessagesAPI.MessageResponse>;
}

export type ChatListResponse = Array<ChatResponse>;

export interface ChatCreateParams {
  /**
   * Chat title
   */
  title: string;
}

export interface ChatUpdateParams {
  /**
   * Updated chat title
   */
  title: string;
}

export interface ChatListParams {
  limit?: number;

  skip?: number;
}

export interface ChatDeleteParams {
  archive_only?: boolean;
}

Chats.Messages = Messages;

export declare namespace Chats {
  export {
    type ChatResponse as ChatResponse,
    type ChatRetrieveResponse as ChatRetrieveResponse,
    type ChatListResponse as ChatListResponse,
    type ChatCreateParams as ChatCreateParams,
    type ChatUpdateParams as ChatUpdateParams,
    type ChatListParams as ChatListParams,
    type ChatDeleteParams as ChatDeleteParams,
  };

  export {
    Messages as Messages,
    type MessageResponse as MessageResponse,
    type MessageListResponse as MessageListResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
  };
}
