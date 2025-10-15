// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ChatAPI from './chat';
import { Chat, ChatCompletionsParams, ChatCompletionsResponse } from './chat';
import * as ModelsAPI from './models';
import {
  ModelListResponse,
  ModelRetrieveAllmodelsResponse,
  ModelRetrieveRatedbidsParams,
  ModelRetrieveRatedbidsResponse,
  Models,
} from './models';
import * as SessionAPI from './session';
import {
  Session,
  SessionApproveParams,
  SessionApproveResponse,
  SessionBidsessionParams,
  SessionBidsessionResponse,
  SessionClosesessionResponse,
  SessionDataRequest,
  SessionModelsessionParams,
  SessionModelsessionResponse,
  SessionPingsessionResponse,
} from './session';
import * as AuthAPI from './auth/auth';
import { Auth, AuthDeleteRegisterResponse, AuthRetrieveMeResponse } from './auth/auth';
import * as AutomationAPI from './automation/automation';
import { Automation } from './automation/automation';
import * as ChatHistoryAPI from './chat-history/chat-history';
import { ChatHistory } from './chat-history/chat-history';

export class V1 extends APIResource {
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
  session: SessionAPI.Session = new SessionAPI.Session(this._client);
  automation: AutomationAPI.Automation = new AutomationAPI.Automation(this._client);
  chatHistory: ChatHistoryAPI.ChatHistory = new ChatHistoryAPI.ChatHistory(this._client);
}

V1.Auth = Auth;
V1.Models = Models;
V1.Chat = Chat;
V1.Session = Session;
V1.Automation = Automation;
V1.ChatHistory = ChatHistory;

export declare namespace V1 {
  export {
    Auth as Auth,
    type AuthDeleteRegisterResponse as AuthDeleteRegisterResponse,
    type AuthRetrieveMeResponse as AuthRetrieveMeResponse,
  };

  export {
    Models as Models,
    type ModelListResponse as ModelListResponse,
    type ModelRetrieveAllmodelsResponse as ModelRetrieveAllmodelsResponse,
    type ModelRetrieveRatedbidsResponse as ModelRetrieveRatedbidsResponse,
    type ModelRetrieveRatedbidsParams as ModelRetrieveRatedbidsParams,
  };

  export {
    Chat as Chat,
    type ChatCompletionsResponse as ChatCompletionsResponse,
    type ChatCompletionsParams as ChatCompletionsParams,
  };

  export {
    Session as Session,
    type SessionDataRequest as SessionDataRequest,
    type SessionApproveResponse as SessionApproveResponse,
    type SessionBidsessionResponse as SessionBidsessionResponse,
    type SessionClosesessionResponse as SessionClosesessionResponse,
    type SessionModelsessionResponse as SessionModelsessionResponse,
    type SessionPingsessionResponse as SessionPingsessionResponse,
    type SessionApproveParams as SessionApproveParams,
    type SessionBidsessionParams as SessionBidsessionParams,
    type SessionModelsessionParams as SessionModelsessionParams,
  };

  export { Automation as Automation };

  export { ChatHistory as ChatHistory };
}
