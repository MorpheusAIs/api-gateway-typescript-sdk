// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ChatsAPI from './chats/chats';
import {
  ChatCreateParams,
  ChatDeleteParams,
  ChatListParams,
  ChatListResponse,
  ChatResponse,
  ChatRetrieveResponse,
  ChatUpdateParams,
  Chats,
} from './chats/chats';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ChatHistory extends APIResource {
  chats: ChatsAPI.Chats = new ChatsAPI.Chats(this._client);

  /**
   * Delete a specific message.
   *
   * @example
   * ```ts
   * await client.api.v1.chatHistory.delete('message_id');
   * ```
   */
  delete(messageID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/chat-history/messages/${messageID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

ChatHistory.Chats = Chats;

export declare namespace ChatHistory {
  export {
    Chats as Chats,
    type ChatResponse as ChatResponse,
    type ChatRetrieveResponse as ChatRetrieveResponse,
    type ChatListResponse as ChatListResponse,
    type ChatCreateParams as ChatCreateParams,
    type ChatUpdateParams as ChatUpdateParams,
    type ChatListParams as ChatListParams,
    type ChatDeleteParams as ChatDeleteParams,
  };
}
