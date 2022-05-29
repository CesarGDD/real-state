"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgServiceClientImpl = exports.ChatServiceClientImpl = exports.GetMsgsResponse = exports.GetMsgsRequest = exports.GetMsgResponse = exports.GetMsgRequest = exports.DeleteMsgResponse = exports.DeleteMsgRequest = exports.CreateMsgResponse = exports.CreateMsgRequest = exports.Msg = exports.GetChatsResponse = exports.GetChatsRequest = exports.GetChatResponse = exports.GetChatRequest = exports.DeleteChatResponse = exports.DeleteChatRequest = exports.CreateChatResponse = exports.CreateChatRequest = exports.Chat = exports.protobufPackage = void 0;
const Long = require("long");
const _m0 = require("protobufjs/minimal");
exports.protobufPackage = 'chatpb';
function createBaseChat() {
    return { id: '', userId: 0, agentId: 0 };
}
exports.Chat = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : '',
            userId: isSet(object.userId) ? Number(object.userId) : 0,
            agentId: isSet(object.agentId) ? Number(object.agentId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.userId !== undefined && (obj.userId = Math.round(message.userId));
        message.agentId !== undefined &&
            (obj.agentId = Math.round(message.agentId));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseChat();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : '';
        message.userId = (_b = object.userId) !== null && _b !== void 0 ? _b : 0;
        message.agentId = (_c = object.agentId) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseCreateChatRequest() {
    return { userId: 0, agentId: 0 };
}
exports.CreateChatRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.userId !== 0) {
            writer.uint32(8).int32(message.userId);
        }
        if (message.agentId !== 0) {
            writer.uint32(16).int32(message.agentId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            userId: isSet(object.userId) ? Number(object.userId) : 0,
            agentId: isSet(object.agentId) ? Number(object.agentId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = Math.round(message.userId));
        message.agentId !== undefined &&
            (obj.agentId = Math.round(message.agentId));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCreateChatRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : 0;
        message.agentId = (_b = object.agentId) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseCreateChatResponse() {
    return { chat: undefined };
}
exports.CreateChatResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chat !== undefined) {
            exports.Chat.encode(message.chat, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateChatResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chat = exports.Chat.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            chat: isSet(object.chat) ? exports.Chat.fromJSON(object.chat) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chat !== undefined &&
            (obj.chat = message.chat ? exports.Chat.toJSON(message.chat) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreateChatResponse();
        message.chat =
            object.chat !== undefined && object.chat !== null
                ? exports.Chat.fromPartial(object.chat)
                : undefined;
        return message;
    },
};
function createBaseDeleteChatRequest() {
    return { id: '' };
}
exports.DeleteChatRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteChatRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseDeleteChatResponse() {
    return { deleted: '' };
}
exports.DeleteChatResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deleted !== '') {
            writer.uint32(10).string(message.deleted);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            deleted: isSet(object.deleted) ? String(object.deleted) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.deleted !== undefined && (obj.deleted = message.deleted);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteChatResponse();
        message.deleted = (_a = object.deleted) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseGetChatRequest() {
    return { id: '' };
}
exports.GetChatRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetChatRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseGetChatResponse() {
    return { chat: undefined };
}
exports.GetChatResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chat !== undefined) {
            exports.Chat.encode(message.chat, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetChatResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chat = exports.Chat.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            chat: isSet(object.chat) ? exports.Chat.fromJSON(object.chat) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chat !== undefined &&
            (obj.chat = message.chat ? exports.Chat.toJSON(message.chat) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetChatResponse();
        message.chat =
            object.chat !== undefined && object.chat !== null
                ? exports.Chat.fromPartial(object.chat)
                : undefined;
        return message;
    },
};
function createBaseGetChatsRequest() {
    return { id: 0 };
}
exports.GetChatsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            id: isSet(object.id) ? Number(object.id) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetChatsRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseGetChatsResponse() {
    return { chat: [] };
}
exports.GetChatsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.chat) {
            exports.Chat.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetChatsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chat.push(exports.Chat.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            chat: Array.isArray(object === null || object === void 0 ? void 0 : object.chat)
                ? object.chat.map((e) => exports.Chat.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.chat) {
            obj.chat = message.chat.map((e) => (e ? exports.Chat.toJSON(e) : undefined));
        }
        else {
            obj.chat = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetChatsResponse();
        message.chat = ((_a = object.chat) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Chat.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsg() {
    return { id: '', chatId: '', content: '', timestamp: 0 };
}
exports.Msg = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : '',
            chatId: isSet(object.chatId) ? String(object.chatId) : '',
            content: isSet(object.content) ? String(object.content) : '',
            timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.chatId !== undefined && (obj.chatId = message.chatId);
        message.content !== undefined && (obj.content = message.content);
        message.timestamp !== undefined &&
            (obj.timestamp = Math.round(message.timestamp));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsg();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : '';
        message.chatId = (_b = object.chatId) !== null && _b !== void 0 ? _b : '';
        message.content = (_c = object.content) !== null && _c !== void 0 ? _c : '';
        message.timestamp = (_d = object.timestamp) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseCreateMsgRequest() {
    return { chatId: '', content: '', timestamp: 0 };
}
exports.CreateMsgRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            chatId: isSet(object.chatId) ? String(object.chatId) : '',
            content: isSet(object.content) ? String(object.content) : '',
            timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chatId !== undefined && (obj.chatId = message.chatId);
        message.content !== undefined && (obj.content = message.content);
        message.timestamp !== undefined &&
            (obj.timestamp = Math.round(message.timestamp));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCreateMsgRequest();
        message.chatId = (_a = object.chatId) !== null && _a !== void 0 ? _a : '';
        message.content = (_b = object.content) !== null && _b !== void 0 ? _b : '';
        message.timestamp = (_c = object.timestamp) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseCreateMsgResponse() {
    return { msg: undefined };
}
exports.CreateMsgResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.msg !== undefined) {
            exports.Msg.encode(message.msg, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = exports.Msg.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            msg: isSet(object.msg) ? exports.Msg.fromJSON(object.msg) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.msg !== undefined &&
            (obj.msg = message.msg ? exports.Msg.toJSON(message.msg) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreateMsgResponse();
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? exports.Msg.fromPartial(object.msg)
                : undefined;
        return message;
    },
};
function createBaseDeleteMsgRequest() {
    return { id: '' };
}
exports.DeleteMsgRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteMsgRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseDeleteMsgResponse() {
    return { deleted: '' };
}
exports.DeleteMsgResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deleted !== '') {
            writer.uint32(10).string(message.deleted);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            deleted: isSet(object.deleted) ? String(object.deleted) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.deleted !== undefined && (obj.deleted = message.deleted);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteMsgResponse();
        message.deleted = (_a = object.deleted) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseGetMsgRequest() {
    return { id: '' };
}
exports.GetMsgRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetMsgRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseGetMsgResponse() {
    return { Msg: undefined };
}
exports.GetMsgResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.Msg !== undefined) {
            exports.Msg.encode(message.Msg, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMsgResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Msg = exports.Msg.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            Msg: isSet(object.Msg) ? exports.Msg.fromJSON(object.Msg) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.Msg !== undefined &&
            (obj.Msg = message.Msg ? exports.Msg.toJSON(message.Msg) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetMsgResponse();
        message.Msg =
            object.Msg !== undefined && object.Msg !== null
                ? exports.Msg.fromPartial(object.Msg)
                : undefined;
        return message;
    },
};
function createBaseGetMsgsRequest() {
    return { id: '' };
}
exports.GetMsgsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetMsgsRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseGetMsgsResponse() {
    return { Msg: [] };
}
exports.GetMsgsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.Msg) {
            exports.Msg.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMsgsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Msg.push(exports.Msg.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            Msg: Array.isArray(object === null || object === void 0 ? void 0 : object.Msg)
                ? object.Msg.map((e) => exports.Msg.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.Msg) {
            obj.Msg = message.Msg.map((e) => (e ? exports.Msg.toJSON(e) : undefined));
        }
        else {
            obj.Msg = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetMsgsResponse();
        message.Msg = ((_a = object.Msg) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Msg.fromPartial(e))) || [];
        return message;
    },
};
class ChatServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateChat = this.CreateChat.bind(this);
        this.DeleteChat = this.DeleteChat.bind(this);
        this.GetChat = this.GetChat.bind(this);
        this.GetChats = this.GetChats.bind(this);
    }
    CreateChat(request) {
        const data = exports.CreateChatRequest.encode(request).finish();
        const promise = this.rpc.request('chatpb.ChatService', 'CreateChat', data);
        return promise.then((data) => exports.CreateChatResponse.decode(new _m0.Reader(data)));
    }
    DeleteChat(request) {
        const data = exports.DeleteChatRequest.encode(request).finish();
        const promise = this.rpc.request('chatpb.ChatService', 'DeleteChat', data);
        return promise.then((data) => exports.DeleteChatResponse.decode(new _m0.Reader(data)));
    }
    GetChat(request) {
        const data = exports.GetChatRequest.encode(request).finish();
        const promise = this.rpc.request('chatpb.ChatService', 'GetChat', data);
        return promise.then((data) => exports.GetChatResponse.decode(new _m0.Reader(data)));
    }
    GetChats(request) {
        const data = exports.GetChatsRequest.encode(request).finish();
        const promise = this.rpc.request('chatpb.ChatService', 'GetChats', data);
        return promise.then((data) => exports.GetChatsResponse.decode(new _m0.Reader(data)));
    }
}
exports.ChatServiceClientImpl = ChatServiceClientImpl;
class MsgServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateMsg = this.CreateMsg.bind(this);
        this.DeleteMsg = this.DeleteMsg.bind(this);
        this.GetMsg = this.GetMsg.bind(this);
        this.GetMsgs = this.GetMsgs.bind(this);
    }
    CreateMsg(request) {
        const data = exports.CreateMsgRequest.encode(request).finish();
        const promise = this.rpc.request('chatpb.MsgService', 'CreateMsg', data);
        return promise.then((data) => exports.CreateMsgResponse.decode(new _m0.Reader(data)));
    }
    DeleteMsg(request) {
        const data = exports.DeleteMsgRequest.encode(request).finish();
        const promise = this.rpc.request('chatpb.MsgService', 'DeleteMsg', data);
        return promise.then((data) => exports.DeleteMsgResponse.decode(new _m0.Reader(data)));
    }
    GetMsg(request) {
        const data = exports.GetMsgRequest.encode(request).finish();
        const promise = this.rpc.request('chatpb.MsgService', 'GetMsg', data);
        return promise.then((data) => exports.GetMsgResponse.decode(new _m0.Reader(data)));
    }
    GetMsgs(request) {
        const data = exports.GetMsgsRequest.encode(request).finish();
        const promise = this.rpc.request('chatpb.MsgService', 'GetMsgs', data);
        return promise.then((data) => exports.GetMsgsResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgServiceClientImpl = MsgServiceClientImpl;
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=chatpb.js.map