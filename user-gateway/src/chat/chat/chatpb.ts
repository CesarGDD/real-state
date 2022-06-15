/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = 'chatpb';

export interface Chat {
  id: string;
  userId: number;
  agentId: number;
}

export interface CreateChatRequest {
  userId: number;
  agentId: number;
}

export interface CreateChatResponse {
  chat: Chat | undefined;
}

export interface DeleteChatRequest {
  id: string;
}

export interface DeleteChatResponse {
  deleted: string;
}

export interface GetChatRequest {
  id: string;
}

export interface GetChatResponse {
  chat: Chat | undefined;
}

export interface GetChatsRequest {
  id: number;
}

export interface GetChatsResponse {
  chat: Chat[];
}

export interface Msg {
  id: string;
  chatId: string;
  content: string;
  timestamp: number;
}

export interface CreateMsgRequest {
  chatId: string;
  content: string;
  timestamp: number;
}

export interface CreateMsgResponse {
  msg: Msg | undefined;
}

export interface DeleteMsgRequest {
  id: string;
}

export interface DeleteMsgResponse {
  deleted: string;
}

export interface GetMsgRequest {
  id: string;
}

export interface GetMsgResponse {
  Msg: Msg | undefined;
}

export interface GetMsgsRequest {
  id: string;
}

export interface GetMsgsResponse {
  Msg: Msg[];
}

function createBaseChat(): Chat {
  return { id: '', userId: 0, agentId: 0 };
}

export const Chat = {
  encode(message: Chat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.userId !== 0) {
      writer.uint32(16).int32(message.userId);
    }
    if (message.agentId !== 0) {
      writer.uint32(24).int32(message.agentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Chat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.userId = reader.int32();
          break;
        case 3:
          message.agentId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Chat {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      agentId: isSet(object.agentId) ? Number(object.agentId) : 0,
    };
  },

  toJSON(message: Chat): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.agentId !== undefined &&
      (obj.agentId = Math.round(message.agentId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Chat>, I>>(object: I): Chat {
    const message = createBaseChat();
    message.id = object.id ?? '';
    message.userId = object.userId ?? 0;
    message.agentId = object.agentId ?? 0;
    return message;
  },
};

function createBaseCreateChatRequest(): CreateChatRequest {
  return { userId: 0, agentId: 0 };
}

export const CreateChatRequest = {
  encode(
    message: CreateChatRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int32(message.userId);
    }
    if (message.agentId !== 0) {
      writer.uint32(16).int32(message.agentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChatRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChatRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.int32();
          break;
        case 2:
          message.agentId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateChatRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      agentId: isSet(object.agentId) ? Number(object.agentId) : 0,
    };
  },

  toJSON(message: CreateChatRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.agentId !== undefined &&
      (obj.agentId = Math.round(message.agentId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateChatRequest>, I>>(
    object: I,
  ): CreateChatRequest {
    const message = createBaseCreateChatRequest();
    message.userId = object.userId ?? 0;
    message.agentId = object.agentId ?? 0;
    return message;
  },
};

function createBaseCreateChatResponse(): CreateChatResponse {
  return { chat: undefined };
}

export const CreateChatResponse = {
  encode(
    message: CreateChatResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chat !== undefined) {
      Chat.encode(message.chat, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateChatResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateChatResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chat = Chat.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateChatResponse {
    return {
      chat: isSet(object.chat) ? Chat.fromJSON(object.chat) : undefined,
    };
  },

  toJSON(message: CreateChatResponse): unknown {
    const obj: any = {};
    message.chat !== undefined &&
      (obj.chat = message.chat ? Chat.toJSON(message.chat) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateChatResponse>, I>>(
    object: I,
  ): CreateChatResponse {
    const message = createBaseCreateChatResponse();
    message.chat =
      object.chat !== undefined && object.chat !== null
        ? Chat.fromPartial(object.chat)
        : undefined;
    return message;
  },
};

function createBaseDeleteChatRequest(): DeleteChatRequest {
  return { id: '' };
}

export const DeleteChatRequest = {
  encode(
    message: DeleteChatRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteChatRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteChatRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteChatRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: DeleteChatRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteChatRequest>, I>>(
    object: I,
  ): DeleteChatRequest {
    const message = createBaseDeleteChatRequest();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseDeleteChatResponse(): DeleteChatResponse {
  return { deleted: '' };
}

export const DeleteChatResponse = {
  encode(
    message: DeleteChatResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.deleted !== '') {
      writer.uint32(10).string(message.deleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteChatResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteChatResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deleted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteChatResponse {
    return {
      deleted: isSet(object.deleted) ? String(object.deleted) : '',
    };
  },

  toJSON(message: DeleteChatResponse): unknown {
    const obj: any = {};
    message.deleted !== undefined && (obj.deleted = message.deleted);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteChatResponse>, I>>(
    object: I,
  ): DeleteChatResponse {
    const message = createBaseDeleteChatResponse();
    message.deleted = object.deleted ?? '';
    return message;
  },
};

function createBaseGetChatRequest(): GetChatRequest {
  return { id: '' };
}

export const GetChatRequest = {
  encode(
    message: GetChatRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetChatRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChatRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetChatRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: GetChatRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetChatRequest>, I>>(
    object: I,
  ): GetChatRequest {
    const message = createBaseGetChatRequest();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseGetChatResponse(): GetChatResponse {
  return { chat: undefined };
}

export const GetChatResponse = {
  encode(
    message: GetChatResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chat !== undefined) {
      Chat.encode(message.chat, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetChatResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChatResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chat = Chat.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetChatResponse {
    return {
      chat: isSet(object.chat) ? Chat.fromJSON(object.chat) : undefined,
    };
  },

  toJSON(message: GetChatResponse): unknown {
    const obj: any = {};
    message.chat !== undefined &&
      (obj.chat = message.chat ? Chat.toJSON(message.chat) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetChatResponse>, I>>(
    object: I,
  ): GetChatResponse {
    const message = createBaseGetChatResponse();
    message.chat =
      object.chat !== undefined && object.chat !== null
        ? Chat.fromPartial(object.chat)
        : undefined;
    return message;
  },
};

function createBaseGetChatsRequest(): GetChatsRequest {
  return { id: 0 };
}

export const GetChatsRequest = {
  encode(
    message: GetChatsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetChatsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChatsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetChatsRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: GetChatsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetChatsRequest>, I>>(
    object: I,
  ): GetChatsRequest {
    const message = createBaseGetChatsRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseGetChatsResponse(): GetChatsResponse {
  return { chat: [] };
}

export const GetChatsResponse = {
  encode(
    message: GetChatsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.chat) {
      Chat.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetChatsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chat.push(Chat.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetChatsResponse {
    return {
      chat: Array.isArray(object?.chat)
        ? object.chat.map((e: any) => Chat.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetChatsResponse): unknown {
    const obj: any = {};
    if (message.chat) {
      obj.chat = message.chat.map((e) => (e ? Chat.toJSON(e) : undefined));
    } else {
      obj.chat = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetChatsResponse>, I>>(
    object: I,
  ): GetChatsResponse {
    const message = createBaseGetChatsResponse();
    message.chat = object.chat?.map((e) => Chat.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsg(): Msg {
  return { id: '', chatId: '', content: '', timestamp: 0 };
}

export const Msg = {
  encode(message: Msg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.chatId !== '') {
      writer.uint32(18).string(message.chatId);
    }
    if (message.content !== '') {
      writer.uint32(26).string(message.content);
    }
    if (message.timestamp !== 0) {
      writer.uint32(32).int32(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Msg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.chatId = reader.string();
          break;
        case 3:
          message.content = reader.string();
          break;
        case 4:
          message.timestamp = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Msg {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      chatId: isSet(object.chatId) ? String(object.chatId) : '',
      content: isSet(object.content) ? String(object.content) : '',
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: Msg): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.chatId !== undefined && (obj.chatId = message.chatId);
    message.content !== undefined && (obj.content = message.content);
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Msg>, I>>(object: I): Msg {
    const message = createBaseMsg();
    message.id = object.id ?? '';
    message.chatId = object.chatId ?? '';
    message.content = object.content ?? '';
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseCreateMsgRequest(): CreateMsgRequest {
  return { chatId: '', content: '', timestamp: 0 };
}

export const CreateMsgRequest = {
  encode(
    message: CreateMsgRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chatId !== '') {
      writer.uint32(10).string(message.chatId);
    }
    if (message.content !== '') {
      writer.uint32(18).string(message.content);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).int32(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateMsgRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMsgRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatId = reader.string();
          break;
        case 2:
          message.content = reader.string();
          break;
        case 3:
          message.timestamp = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateMsgRequest {
    return {
      chatId: isSet(object.chatId) ? String(object.chatId) : '',
      content: isSet(object.content) ? String(object.content) : '',
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: CreateMsgRequest): unknown {
    const obj: any = {};
    message.chatId !== undefined && (obj.chatId = message.chatId);
    message.content !== undefined && (obj.content = message.content);
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateMsgRequest>, I>>(
    object: I,
  ): CreateMsgRequest {
    const message = createBaseCreateMsgRequest();
    message.chatId = object.chatId ?? '';
    message.content = object.content ?? '';
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseCreateMsgResponse(): CreateMsgResponse {
  return { msg: undefined };
}

export const CreateMsgResponse = {
  encode(
    message: CreateMsgResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.msg !== undefined) {
      Msg.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateMsgResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMsgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = Msg.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateMsgResponse {
    return {
      msg: isSet(object.msg) ? Msg.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: CreateMsgResponse): unknown {
    const obj: any = {};
    message.msg !== undefined &&
      (obj.msg = message.msg ? Msg.toJSON(message.msg) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateMsgResponse>, I>>(
    object: I,
  ): CreateMsgResponse {
    const message = createBaseCreateMsgResponse();
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? Msg.fromPartial(object.msg)
        : undefined;
    return message;
  },
};

function createBaseDeleteMsgRequest(): DeleteMsgRequest {
  return { id: '' };
}

export const DeleteMsgRequest = {
  encode(
    message: DeleteMsgRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMsgRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMsgRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteMsgRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: DeleteMsgRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteMsgRequest>, I>>(
    object: I,
  ): DeleteMsgRequest {
    const message = createBaseDeleteMsgRequest();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseDeleteMsgResponse(): DeleteMsgResponse {
  return { deleted: '' };
}

export const DeleteMsgResponse = {
  encode(
    message: DeleteMsgResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.deleted !== '') {
      writer.uint32(10).string(message.deleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMsgResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMsgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deleted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteMsgResponse {
    return {
      deleted: isSet(object.deleted) ? String(object.deleted) : '',
    };
  },

  toJSON(message: DeleteMsgResponse): unknown {
    const obj: any = {};
    message.deleted !== undefined && (obj.deleted = message.deleted);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteMsgResponse>, I>>(
    object: I,
  ): DeleteMsgResponse {
    const message = createBaseDeleteMsgResponse();
    message.deleted = object.deleted ?? '';
    return message;
  },
};

function createBaseGetMsgRequest(): GetMsgRequest {
  return { id: '' };
}

export const GetMsgRequest = {
  encode(
    message: GetMsgRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMsgRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMsgRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMsgRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: GetMsgRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMsgRequest>, I>>(
    object: I,
  ): GetMsgRequest {
    const message = createBaseGetMsgRequest();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseGetMsgResponse(): GetMsgResponse {
  return { Msg: undefined };
}

export const GetMsgResponse = {
  encode(
    message: GetMsgResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.Msg !== undefined) {
      Msg.encode(message.Msg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMsgResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMsgResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Msg = Msg.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMsgResponse {
    return {
      Msg: isSet(object.Msg) ? Msg.fromJSON(object.Msg) : undefined,
    };
  },

  toJSON(message: GetMsgResponse): unknown {
    const obj: any = {};
    message.Msg !== undefined &&
      (obj.Msg = message.Msg ? Msg.toJSON(message.Msg) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMsgResponse>, I>>(
    object: I,
  ): GetMsgResponse {
    const message = createBaseGetMsgResponse();
    message.Msg =
      object.Msg !== undefined && object.Msg !== null
        ? Msg.fromPartial(object.Msg)
        : undefined;
    return message;
  },
};

function createBaseGetMsgsRequest(): GetMsgsRequest {
  return { id: '' };
}

export const GetMsgsRequest = {
  encode(
    message: GetMsgsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMsgsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMsgsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMsgsRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: GetMsgsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMsgsRequest>, I>>(
    object: I,
  ): GetMsgsRequest {
    const message = createBaseGetMsgsRequest();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseGetMsgsResponse(): GetMsgsResponse {
  return { Msg: [] };
}

export const GetMsgsResponse = {
  encode(
    message: GetMsgsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.Msg) {
      Msg.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMsgsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMsgsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Msg.push(Msg.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMsgsResponse {
    return {
      Msg: Array.isArray(object?.Msg)
        ? object.Msg.map((e: any) => Msg.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetMsgsResponse): unknown {
    const obj: any = {};
    if (message.Msg) {
      obj.Msg = message.Msg.map((e) => (e ? Msg.toJSON(e) : undefined));
    } else {
      obj.Msg = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMsgsResponse>, I>>(
    object: I,
  ): GetMsgsResponse {
    const message = createBaseGetMsgsResponse();
    message.Msg = object.Msg?.map((e) => Msg.fromPartial(e)) || [];
    return message;
  },
};

export interface ChatService {
  CreateChat(request: CreateChatRequest): Promise<CreateChatResponse>;
  DeleteChat(request: DeleteChatRequest): Promise<DeleteChatResponse>;
  GetChat(request: GetChatRequest): Promise<GetChatResponse>;
  GetChats(request: GetChatsRequest): Promise<GetChatsResponse>;
}

export class ChatServiceClientImpl implements ChatService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateChat = this.CreateChat.bind(this);
    this.DeleteChat = this.DeleteChat.bind(this);
    this.GetChat = this.GetChat.bind(this);
    this.GetChats = this.GetChats.bind(this);
  }
  CreateChat(request: CreateChatRequest): Promise<CreateChatResponse> {
    const data = CreateChatRequest.encode(request).finish();
    const promise = this.rpc.request('chatpb.ChatService', 'CreateChat', data);
    return promise.then((data) =>
      CreateChatResponse.decode(new _m0.Reader(data)),
    );
  }

  DeleteChat(request: DeleteChatRequest): Promise<DeleteChatResponse> {
    const data = DeleteChatRequest.encode(request).finish();
    const promise = this.rpc.request('chatpb.ChatService', 'DeleteChat', data);
    return promise.then((data) =>
      DeleteChatResponse.decode(new _m0.Reader(data)),
    );
  }

  GetChat(request: GetChatRequest): Promise<GetChatResponse> {
    const data = GetChatRequest.encode(request).finish();
    const promise = this.rpc.request('chatpb.ChatService', 'GetChat', data);
    return promise.then((data) => GetChatResponse.decode(new _m0.Reader(data)));
  }

  GetChats(request: GetChatsRequest): Promise<GetChatsResponse> {
    const data = GetChatsRequest.encode(request).finish();
    const promise = this.rpc.request('chatpb.ChatService', 'GetChats', data);
    return promise.then((data) =>
      GetChatsResponse.decode(new _m0.Reader(data)),
    );
  }
}

export interface MsgService {
  CreateMsg(request: CreateMsgRequest): Promise<CreateMsgResponse>;
  DeleteMsg(request: DeleteMsgRequest): Promise<DeleteMsgResponse>;
  GetMsg(request: GetMsgRequest): Promise<GetMsgResponse>;
  GetMsgs(request: GetMsgsRequest): Promise<GetMsgsResponse>;
}

export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateMsg = this.CreateMsg.bind(this);
    this.DeleteMsg = this.DeleteMsg.bind(this);
    this.GetMsg = this.GetMsg.bind(this);
    this.GetMsgs = this.GetMsgs.bind(this);
  }
  CreateMsg(request: CreateMsgRequest): Promise<CreateMsgResponse> {
    const data = CreateMsgRequest.encode(request).finish();
    const promise = this.rpc.request('chatpb.MsgService', 'CreateMsg', data);
    return promise.then((data) =>
      CreateMsgResponse.decode(new _m0.Reader(data)),
    );
  }

  DeleteMsg(request: DeleteMsgRequest): Promise<DeleteMsgResponse> {
    const data = DeleteMsgRequest.encode(request).finish();
    const promise = this.rpc.request('chatpb.MsgService', 'DeleteMsg', data);
    return promise.then((data) =>
      DeleteMsgResponse.decode(new _m0.Reader(data)),
    );
  }

  GetMsg(request: GetMsgRequest): Promise<GetMsgResponse> {
    const data = GetMsgRequest.encode(request).finish();
    const promise = this.rpc.request('chatpb.MsgService', 'GetMsg', data);
    return promise.then((data) => GetMsgResponse.decode(new _m0.Reader(data)));
  }

  GetMsgs(request: GetMsgsRequest): Promise<GetMsgsResponse> {
    const data = GetMsgsRequest.encode(request).finish();
    const promise = this.rpc.request('chatpb.MsgService', 'GetMsgs', data);
    return promise.then((data) => GetMsgsResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
