# API

## V1

### Auth

Types:

- <code><a href="./src/resources/api/v1/auth/auth.ts">AuthDeleteRegisterResponse</a></code>
- <code><a href="./src/resources/api/v1/auth/auth.ts">AuthRetrieveMeResponse</a></code>

Methods:

- <code title="delete /api/v1/auth/register">client.api.v1.auth.<a href="./src/resources/api/v1/auth/auth.ts">deleteRegister</a>() -> AuthDeleteRegisterResponse</code>
- <code title="get /api/v1/auth/me">client.api.v1.auth.<a href="./src/resources/api/v1/auth/auth.ts">retrieveMe</a>() -> AuthRetrieveMeResponse</code>

#### Keys

Types:

- <code><a href="./src/resources/api/v1/auth/keys/keys.ts">APIKeyDB</a></code>
- <code><a href="./src/resources/api/v1/auth/keys/keys.ts">KeyCreateResponse</a></code>
- <code><a href="./src/resources/api/v1/auth/keys/keys.ts">KeyListResponse</a></code>

Methods:

- <code title="post /api/v1/auth/keys">client.api.v1.auth.keys.<a href="./src/resources/api/v1/auth/keys/keys.ts">create</a>({ ...params }) -> KeyCreateResponse</code>
- <code title="get /api/v1/auth/keys">client.api.v1.auth.keys.<a href="./src/resources/api/v1/auth/keys/keys.ts">list</a>() -> KeyListResponse</code>
- <code title="delete /api/v1/auth/keys/{key_id}">client.api.v1.auth.keys.<a href="./src/resources/api/v1/auth/keys/keys.ts">delete</a>(keyID) -> APIKeyDB</code>
- <code title="get /api/v1/auth/keys/first">client.api.v1.auth.keys.<a href="./src/resources/api/v1/auth/keys/keys.ts">retrieveFirst</a>() -> APIKeyDB | null</code>

##### Default

Types:

- <code><a href="./src/resources/api/v1/auth/keys/default.ts">DefaultRetrieveDecryptedResponse</a></code>

Methods:

- <code title="put /api/v1/auth/keys/{key_id}/default">client.api.v1.auth.keys.default.<a href="./src/resources/api/v1/auth/keys/default.ts">create</a>(keyID) -> APIKeyDB</code>
- <code title="get /api/v1/auth/keys/default">client.api.v1.auth.keys.default.<a href="./src/resources/api/v1/auth/keys/default.ts">list</a>() -> APIKeyDB | null</code>
- <code title="get /api/v1/auth/keys/default/decrypted">client.api.v1.auth.keys.default.<a href="./src/resources/api/v1/auth/keys/default.ts">retrieveDecrypted</a>() -> unknown</code>

#### PrivateKey

Types:

- <code><a href="./src/resources/api/v1/auth/private-key.ts">PrivateKeyDeletePrivateKeyResponse</a></code>
- <code><a href="./src/resources/api/v1/auth/private-key.ts">PrivateKeyPrivateKeyResponse</a></code>
- <code><a href="./src/resources/api/v1/auth/private-key.ts">PrivateKeyRetrievePrivateKeyResponse</a></code>

Methods:

- <code title="delete /api/v1/auth/private-key">client.api.v1.auth.privateKey.<a href="./src/resources/api/v1/auth/private-key.ts">deletePrivateKey</a>() -> PrivateKeyDeletePrivateKeyResponse</code>
- <code title="post /api/v1/auth/private-key">client.api.v1.auth.privateKey.<a href="./src/resources/api/v1/auth/private-key.ts">privateKey</a>({ ...params }) -> PrivateKeyPrivateKeyResponse</code>
- <code title="get /api/v1/auth/private-key">client.api.v1.auth.privateKey.<a href="./src/resources/api/v1/auth/private-key.ts">retrievePrivateKey</a>() -> PrivateKeyRetrievePrivateKeyResponse</code>

#### Delegation

Types:

- <code><a href="./src/resources/api/v1/auth/delegation.ts">DelegationRead</a></code>
- <code><a href="./src/resources/api/v1/auth/delegation.ts">DelegationListResponse</a></code>

Methods:

- <code title="post /api/v1/auth/delegation">client.api.v1.auth.delegation.<a href="./src/resources/api/v1/auth/delegation.ts">create</a>({ ...params }) -> DelegationRead</code>
- <code title="get /api/v1/auth/delegation">client.api.v1.auth.delegation.<a href="./src/resources/api/v1/auth/delegation.ts">list</a>({ ...params }) -> DelegationListResponse</code>
- <code title="delete /api/v1/auth/delegation/{delegation_id}">client.api.v1.auth.delegation.<a href="./src/resources/api/v1/auth/delegation.ts">delete</a>(delegationID) -> void</code>
- <code title="get /api/v1/auth/delegation/active">client.api.v1.auth.delegation.<a href="./src/resources/api/v1/auth/delegation.ts">retrieveActive</a>() -> DelegationRead | null</code>

### Models

Types:

- <code><a href="./src/resources/api/v1/models.ts">ModelListResponse</a></code>
- <code><a href="./src/resources/api/v1/models.ts">ModelRetrieveAllmodelsResponse</a></code>
- <code><a href="./src/resources/api/v1/models.ts">ModelRetrieveRatedbidsResponse</a></code>

Methods:

- <code title="get /api/v1/models">client.api.v1.models.<a href="./src/resources/api/v1/models.ts">list</a>() -> unknown</code>
- <code title="get /api/v1/models/allmodels">client.api.v1.models.<a href="./src/resources/api/v1/models.ts">retrieveAllmodels</a>() -> unknown</code>
- <code title="get /api/v1/models/ratedbids">client.api.v1.models.<a href="./src/resources/api/v1/models.ts">retrieveRatedbids</a>({ ...params }) -> unknown</code>

### Chat

Types:

- <code><a href="./src/resources/api/v1/chat.ts">ChatCompletionsResponse</a></code>

Methods:

- <code title="post /api/v1/chat/completions">client.api.v1.chat.<a href="./src/resources/api/v1/chat.ts">completions</a>({ ...params }) -> unknown</code>

### Session

Types:

- <code><a href="./src/resources/api/v1/session.ts">SessionDataRequest</a></code>
- <code><a href="./src/resources/api/v1/session.ts">SessionApproveResponse</a></code>
- <code><a href="./src/resources/api/v1/session.ts">SessionBidsessionResponse</a></code>
- <code><a href="./src/resources/api/v1/session.ts">SessionClosesessionResponse</a></code>
- <code><a href="./src/resources/api/v1/session.ts">SessionModelsessionResponse</a></code>
- <code><a href="./src/resources/api/v1/session.ts">SessionPingsessionResponse</a></code>

Methods:

- <code title="post /api/v1/session/approve">client.api.v1.session.<a href="./src/resources/api/v1/session.ts">approve</a>({ ...params }) -> unknown</code>
- <code title="post /api/v1/session/bidsession">client.api.v1.session.<a href="./src/resources/api/v1/session.ts">bidsession</a>({ ...params }) -> unknown</code>
- <code title="post /api/v1/session/closesession">client.api.v1.session.<a href="./src/resources/api/v1/session.ts">closesession</a>() -> unknown</code>
- <code title="post /api/v1/session/modelsession">client.api.v1.session.<a href="./src/resources/api/v1/session.ts">modelsession</a>({ ...params }) -> unknown</code>
- <code title="post /api/v1/session/pingsession">client.api.v1.session.<a href="./src/resources/api/v1/session.ts">pingsession</a>() -> unknown</code>

### Automation

#### Settings

Types:

- <code><a href="./src/resources/api/v1/automation/settings.ts">AutomationSettings</a></code>

Methods:

- <code title="put /api/v1/automation/settings">client.api.v1.automation.settings.<a href="./src/resources/api/v1/automation/settings.ts">create</a>({ ...params }) -> AutomationSettings</code>
- <code title="get /api/v1/automation/settings">client.api.v1.automation.settings.<a href="./src/resources/api/v1/automation/settings.ts">list</a>() -> AutomationSettings</code>

### ChatHistory

Methods:

- <code title="delete /api/v1/chat-history/messages/{message_id}">client.api.v1.chatHistory.<a href="./src/resources/api/v1/chat-history/chat-history.ts">delete</a>(messageID) -> void</code>

#### Chats

Types:

- <code><a href="./src/resources/api/v1/chat-history/chats/chats.ts">ChatResponse</a></code>
- <code><a href="./src/resources/api/v1/chat-history/chats/chats.ts">ChatRetrieveResponse</a></code>
- <code><a href="./src/resources/api/v1/chat-history/chats/chats.ts">ChatListResponse</a></code>

Methods:

- <code title="post /api/v1/chat-history/chats">client.api.v1.chatHistory.chats.<a href="./src/resources/api/v1/chat-history/chats/chats.ts">create</a>({ ...params }) -> ChatResponse</code>
- <code title="get /api/v1/chat-history/chats/{chat_id}">client.api.v1.chatHistory.chats.<a href="./src/resources/api/v1/chat-history/chats/chats.ts">retrieve</a>(chatID) -> ChatRetrieveResponse</code>
- <code title="put /api/v1/chat-history/chats/{chat_id}">client.api.v1.chatHistory.chats.<a href="./src/resources/api/v1/chat-history/chats/chats.ts">update</a>(chatID, { ...params }) -> ChatResponse</code>
- <code title="get /api/v1/chat-history/chats">client.api.v1.chatHistory.chats.<a href="./src/resources/api/v1/chat-history/chats/chats.ts">list</a>({ ...params }) -> ChatListResponse</code>
- <code title="delete /api/v1/chat-history/chats/{chat_id}">client.api.v1.chatHistory.chats.<a href="./src/resources/api/v1/chat-history/chats/chats.ts">delete</a>(chatID, { ...params }) -> void</code>

##### Messages

Types:

- <code><a href="./src/resources/api/v1/chat-history/chats/messages.ts">MessageResponse</a></code>
- <code><a href="./src/resources/api/v1/chat-history/chats/messages.ts">MessageListResponse</a></code>

Methods:

- <code title="post /api/v1/chat-history/chats/{chat_id}/messages">client.api.v1.chatHistory.chats.messages.<a href="./src/resources/api/v1/chat-history/chats/messages.ts">create</a>(chatID, { ...params }) -> MessageResponse</code>
- <code title="get /api/v1/chat-history/chats/{chat_id}/messages">client.api.v1.chatHistory.chats.messages.<a href="./src/resources/api/v1/chat-history/chats/messages.ts">list</a>(chatID, { ...params }) -> MessageListResponse</code>

# APIInfo

Types:

- <code><a href="./src/resources/api-info.ts">APIInfoRetrieveResponse</a></code>

Methods:

- <code title="get /">client.apiInfo.<a href="./src/resources/api-info.ts">retrieve</a>() -> unknown</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>
- <code><a href="./src/resources/health.ts">HealthModelsCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> unknown</code>
- <code title="get /health/models">client.health.<a href="./src/resources/health.ts">modelsCheck</a>() -> unknown</code>

# CorsCheck

Types:

- <code><a href="./src/resources/cors-check.ts">CorsCheckVerifyResponse</a></code>

Methods:

- <code title="get /cors-check">client.corsCheck.<a href="./src/resources/cors-check.ts">verify</a>() -> unknown</code>
