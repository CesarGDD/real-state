import * as _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "chatpb";
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
export declare const Chat: {
    encode(message: Chat, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Chat;
    fromJSON(object: any): Chat;
    toJSON(message: Chat): unknown;
    fromPartial<I extends {
        id?: string;
        userId?: number;
        agentId?: number;
    } & {
        id?: string;
        userId?: number;
        agentId?: number;
    } & Record<Exclude<keyof I, keyof Chat>, never>>(object: I): Chat;
};
export declare const CreateChatRequest: {
    encode(message: CreateChatRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateChatRequest;
    fromJSON(object: any): CreateChatRequest;
    toJSON(message: CreateChatRequest): unknown;
    fromPartial<I extends {
        userId?: number;
        agentId?: number;
    } & {
        userId?: number;
        agentId?: number;
    } & Record<Exclude<keyof I, keyof CreateChatRequest>, never>>(object: I): CreateChatRequest;
};
export declare const CreateChatResponse: {
    encode(message: CreateChatResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateChatResponse;
    fromJSON(object: any): CreateChatResponse;
    toJSON(message: CreateChatResponse): unknown;
    fromPartial<I extends {
        chat?: {
            id?: string;
            userId?: number;
            agentId?: number;
        };
    } & {
        chat?: {
            id?: string;
            userId?: number;
            agentId?: number;
        } & {
            id?: string;
            userId?: number;
            agentId?: number;
        } & Record<Exclude<keyof I["chat"], keyof Chat>, never>;
    } & Record<Exclude<keyof I, "chat">, never>>(object: I): CreateChatResponse;
};
export declare const DeleteChatRequest: {
    encode(message: DeleteChatRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteChatRequest;
    fromJSON(object: any): DeleteChatRequest;
    toJSON(message: DeleteChatRequest): unknown;
    fromPartial<I extends {
        id?: string;
    } & {
        id?: string;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): DeleteChatRequest;
};
export declare const DeleteChatResponse: {
    encode(message: DeleteChatResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteChatResponse;
    fromJSON(object: any): DeleteChatResponse;
    toJSON(message: DeleteChatResponse): unknown;
    fromPartial<I extends {
        deleted?: string;
    } & {
        deleted?: string;
    } & Record<Exclude<keyof I, "deleted">, never>>(object: I): DeleteChatResponse;
};
export declare const GetChatRequest: {
    encode(message: GetChatRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetChatRequest;
    fromJSON(object: any): GetChatRequest;
    toJSON(message: GetChatRequest): unknown;
    fromPartial<I extends {
        id?: string;
    } & {
        id?: string;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): GetChatRequest;
};
export declare const GetChatResponse: {
    encode(message: GetChatResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetChatResponse;
    fromJSON(object: any): GetChatResponse;
    toJSON(message: GetChatResponse): unknown;
    fromPartial<I extends {
        chat?: {
            id?: string;
            userId?: number;
            agentId?: number;
        };
    } & {
        chat?: {
            id?: string;
            userId?: number;
            agentId?: number;
        } & {
            id?: string;
            userId?: number;
            agentId?: number;
        } & Record<Exclude<keyof I["chat"], keyof Chat>, never>;
    } & Record<Exclude<keyof I, "chat">, never>>(object: I): GetChatResponse;
};
export declare const GetChatsRequest: {
    encode(message: GetChatsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetChatsRequest;
    fromJSON(object: any): GetChatsRequest;
    toJSON(message: GetChatsRequest): unknown;
    fromPartial<I extends {
        id?: number;
    } & {
        id?: number;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): GetChatsRequest;
};
export declare const GetChatsResponse: {
    encode(message: GetChatsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetChatsResponse;
    fromJSON(object: any): GetChatsResponse;
    toJSON(message: GetChatsResponse): unknown;
    fromPartial<I extends {
        chat?: {
            id?: string;
            userId?: number;
            agentId?: number;
        }[];
    } & {
        chat?: {
            id?: string;
            userId?: number;
            agentId?: number;
        }[] & ({
            id?: string;
            userId?: number;
            agentId?: number;
        } & {
            id?: string;
            userId?: number;
            agentId?: number;
        } & Record<Exclude<keyof I["chat"][number], keyof Chat>, never>)[] & Record<Exclude<keyof I["chat"], keyof {
            id?: string;
            userId?: number;
            agentId?: number;
        }[]>, never>;
    } & Record<Exclude<keyof I, "chat">, never>>(object: I): GetChatsResponse;
};
export declare const Msg: {
    encode(message: Msg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Msg;
    fromJSON(object: any): Msg;
    toJSON(message: Msg): unknown;
    fromPartial<I extends {
        id?: string;
        chatId?: string;
        content?: string;
        timestamp?: number;
    } & {
        id?: string;
        chatId?: string;
        content?: string;
        timestamp?: number;
    } & Record<Exclude<keyof I, keyof Msg>, never>>(object: I): Msg;
};
export declare const CreateMsgRequest: {
    encode(message: CreateMsgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMsgRequest;
    fromJSON(object: any): CreateMsgRequest;
    toJSON(message: CreateMsgRequest): unknown;
    fromPartial<I extends {
        chatId?: string;
        content?: string;
        timestamp?: number;
    } & {
        chatId?: string;
        content?: string;
        timestamp?: number;
    } & Record<Exclude<keyof I, keyof CreateMsgRequest>, never>>(object: I): CreateMsgRequest;
};
export declare const CreateMsgResponse: {
    encode(message: CreateMsgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMsgResponse;
    fromJSON(object: any): CreateMsgResponse;
    toJSON(message: CreateMsgResponse): unknown;
    fromPartial<I extends {
        msg?: {
            id?: string;
            chatId?: string;
            content?: string;
            timestamp?: number;
        };
    } & {
        msg?: {
            id?: string;
            chatId?: string;
            content?: string;
            timestamp?: number;
        } & {
            id?: string;
            chatId?: string;
            content?: string;
            timestamp?: number;
        } & Record<Exclude<keyof I["msg"], keyof Msg>, never>;
    } & Record<Exclude<keyof I, "msg">, never>>(object: I): CreateMsgResponse;
};
export declare const DeleteMsgRequest: {
    encode(message: DeleteMsgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMsgRequest;
    fromJSON(object: any): DeleteMsgRequest;
    toJSON(message: DeleteMsgRequest): unknown;
    fromPartial<I extends {
        id?: string;
    } & {
        id?: string;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): DeleteMsgRequest;
};
export declare const DeleteMsgResponse: {
    encode(message: DeleteMsgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMsgResponse;
    fromJSON(object: any): DeleteMsgResponse;
    toJSON(message: DeleteMsgResponse): unknown;
    fromPartial<I extends {
        deleted?: string;
    } & {
        deleted?: string;
    } & Record<Exclude<keyof I, "deleted">, never>>(object: I): DeleteMsgResponse;
};
export declare const GetMsgRequest: {
    encode(message: GetMsgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMsgRequest;
    fromJSON(object: any): GetMsgRequest;
    toJSON(message: GetMsgRequest): unknown;
    fromPartial<I extends {
        id?: string;
    } & {
        id?: string;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): GetMsgRequest;
};
export declare const GetMsgResponse: {
    encode(message: GetMsgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMsgResponse;
    fromJSON(object: any): GetMsgResponse;
    toJSON(message: GetMsgResponse): unknown;
    fromPartial<I extends {
        Msg?: {
            id?: string;
            chatId?: string;
            content?: string;
            timestamp?: number;
        };
    } & {
        Msg?: {
            id?: string;
            chatId?: string;
            content?: string;
            timestamp?: number;
        } & {
            id?: string;
            chatId?: string;
            content?: string;
            timestamp?: number;
        } & Record<Exclude<keyof I["Msg"], keyof Msg>, never>;
    } & Record<Exclude<keyof I, "Msg">, never>>(object: I): GetMsgResponse;
};
export declare const GetMsgsRequest: {
    encode(message: GetMsgsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMsgsRequest;
    fromJSON(object: any): GetMsgsRequest;
    toJSON(message: GetMsgsRequest): unknown;
    fromPartial<I extends {
        id?: string;
    } & {
        id?: string;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): GetMsgsRequest;
};
export declare const GetMsgsResponse: {
    encode(message: GetMsgsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMsgsResponse;
    fromJSON(object: any): GetMsgsResponse;
    toJSON(message: GetMsgsResponse): unknown;
    fromPartial<I extends {
        Msg?: {
            id?: string;
            chatId?: string;
            content?: string;
            timestamp?: number;
        }[];
    } & {
        Msg?: {
            id?: string;
            chatId?: string;
            content?: string;
            timestamp?: number;
        }[] & ({
            id?: string;
            chatId?: string;
            content?: string;
            timestamp?: number;
        } & {
            id?: string;
            chatId?: string;
            content?: string;
            timestamp?: number;
        } & Record<Exclude<keyof I["Msg"][number], keyof Msg>, never>)[] & Record<Exclude<keyof I["Msg"], keyof {
            id?: string;
            chatId?: string;
            content?: string;
            timestamp?: number;
        }[]>, never>;
    } & Record<Exclude<keyof I, "Msg">, never>>(object: I): GetMsgsResponse;
};
export interface ChatService {
    CreateChat(request: CreateChatRequest): Promise<CreateChatResponse>;
    DeleteChat(request: DeleteChatRequest): Promise<DeleteChatResponse>;
    GetChat(request: GetChatRequest): Promise<GetChatResponse>;
    GetChats(request: GetChatsRequest): Promise<GetChatsResponse>;
}
export declare class ChatServiceClientImpl implements ChatService {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateChat(request: CreateChatRequest): Promise<CreateChatResponse>;
    DeleteChat(request: DeleteChatRequest): Promise<DeleteChatResponse>;
    GetChat(request: GetChatRequest): Promise<GetChatResponse>;
    GetChats(request: GetChatsRequest): Promise<GetChatsResponse>;
}
export interface MsgService {
    CreateMsg(request: CreateMsgRequest): Promise<CreateMsgResponse>;
    DeleteMsg(request: DeleteMsgRequest): Promise<DeleteMsgResponse>;
    GetMsg(request: GetMsgRequest): Promise<GetMsgResponse>;
    GetMsgs(request: GetMsgsRequest): Promise<GetMsgsResponse>;
}
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateMsg(request: CreateMsgRequest): Promise<CreateMsgResponse>;
    DeleteMsg(request: DeleteMsgRequest): Promise<DeleteMsgResponse>;
    GetMsg(request: GetMsgRequest): Promise<GetMsgResponse>;
    GetMsgs(request: GetMsgsRequest): Promise<GetMsgsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
