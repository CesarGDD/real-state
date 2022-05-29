/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = 'ag';

export interface Agent {
  agentId: number;
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  password: string;
  photo: string;
  description: string;
}

export interface CreateAgentRequest {
  agent: Agent | undefined;
}

export interface CreateAgentResponse {
  agent: Agent | undefined;
}

export interface GetAgentByIdRequest {
  agentId: number;
}

export interface GetAgentByIdResponse {
  agent: Agent | undefined;
}

export interface DeleteAgentRequest {
  agentId: number;
}

export interface DeleteAgentResponse {
  agent: Agent | undefined;
}

export interface UpdateAgentRequest {
  agent: Agent | undefined;
}

export interface UpdateAgentResponse {
  agent: Agent | undefined;
}

export interface ListAgentRequest {}

export interface ListAgentResponse {
  agent: Agent[];
}

function createBaseAgent(): Agent {
  return {
    agentId: 0,
    firstName: '',
    lastName: '',
    phone: 0,
    email: '',
    password: '',
    photo: '',
    description: '',
  };
}

export const Agent = {
  encode(message: Agent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.agentId !== 0) {
      writer.uint32(8).int32(message.agentId);
    }
    if (message.firstName !== '') {
      writer.uint32(18).string(message.firstName);
    }
    if (message.lastName !== '') {
      writer.uint32(26).string(message.lastName);
    }
    if (message.phone !== 0) {
      writer.uint32(32).int32(message.phone);
    }
    if (message.email !== '') {
      writer.uint32(42).string(message.email);
    }
    if (message.password !== '') {
      writer.uint32(50).string(message.password);
    }
    if (message.photo !== '') {
      writer.uint32(58).string(message.photo);
    }
    if (message.description !== '') {
      writer.uint32(66).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Agent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAgent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agentId = reader.int32();
          break;
        case 2:
          message.firstName = reader.string();
          break;
        case 3:
          message.lastName = reader.string();
          break;
        case 4:
          message.phone = reader.int32();
          break;
        case 5:
          message.email = reader.string();
          break;
        case 6:
          message.password = reader.string();
          break;
        case 7:
          message.photo = reader.string();
          break;
        case 8:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Agent {
    return {
      agentId: isSet(object.agentId) ? Number(object.agentId) : 0,
      firstName: isSet(object.firstName) ? String(object.firstName) : '',
      lastName: isSet(object.lastName) ? String(object.lastName) : '',
      phone: isSet(object.phone) ? Number(object.phone) : 0,
      email: isSet(object.email) ? String(object.email) : '',
      password: isSet(object.password) ? String(object.password) : '',
      photo: isSet(object.photo) ? String(object.photo) : '',
      description: isSet(object.description) ? String(object.description) : '',
    };
  },

  toJSON(message: Agent): unknown {
    const obj: any = {};
    message.agentId !== undefined &&
      (obj.agentId = Math.round(message.agentId));
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.phone !== undefined && (obj.phone = Math.round(message.phone));
    message.email !== undefined && (obj.email = message.email);
    message.password !== undefined && (obj.password = message.password);
    message.photo !== undefined && (obj.photo = message.photo);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Agent>, I>>(object: I): Agent {
    const message = createBaseAgent();
    message.agentId = object.agentId ?? 0;
    message.firstName = object.firstName ?? '';
    message.lastName = object.lastName ?? '';
    message.phone = object.phone ?? 0;
    message.email = object.email ?? '';
    message.password = object.password ?? '';
    message.photo = object.photo ?? '';
    message.description = object.description ?? '';
    return message;
  },
};

function createBaseCreateAgentRequest(): CreateAgentRequest {
  return { agent: undefined };
}

export const CreateAgentRequest = {
  encode(
    message: CreateAgentRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.agent !== undefined) {
      Agent.encode(message.agent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAgentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAgentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agent = Agent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateAgentRequest {
    return {
      agent: isSet(object.agent) ? Agent.fromJSON(object.agent) : undefined,
    };
  },

  toJSON(message: CreateAgentRequest): unknown {
    const obj: any = {};
    message.agent !== undefined &&
      (obj.agent = message.agent ? Agent.toJSON(message.agent) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateAgentRequest>, I>>(
    object: I,
  ): CreateAgentRequest {
    const message = createBaseCreateAgentRequest();
    message.agent =
      object.agent !== undefined && object.agent !== null
        ? Agent.fromPartial(object.agent)
        : undefined;
    return message;
  },
};

function createBaseCreateAgentResponse(): CreateAgentResponse {
  return { agent: undefined };
}

export const CreateAgentResponse = {
  encode(
    message: CreateAgentResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.agent !== undefined) {
      Agent.encode(message.agent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAgentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAgentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agent = Agent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateAgentResponse {
    return {
      agent: isSet(object.agent) ? Agent.fromJSON(object.agent) : undefined,
    };
  },

  toJSON(message: CreateAgentResponse): unknown {
    const obj: any = {};
    message.agent !== undefined &&
      (obj.agent = message.agent ? Agent.toJSON(message.agent) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateAgentResponse>, I>>(
    object: I,
  ): CreateAgentResponse {
    const message = createBaseCreateAgentResponse();
    message.agent =
      object.agent !== undefined && object.agent !== null
        ? Agent.fromPartial(object.agent)
        : undefined;
    return message;
  },
};

function createBaseGetAgentByIdRequest(): GetAgentByIdRequest {
  return { agentId: 0 };
}

export const GetAgentByIdRequest = {
  encode(
    message: GetAgentByIdRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.agentId !== 0) {
      writer.uint32(8).int32(message.agentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAgentByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAgentByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agentId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAgentByIdRequest {
    return {
      agentId: isSet(object.agentId) ? Number(object.agentId) : 0,
    };
  },

  toJSON(message: GetAgentByIdRequest): unknown {
    const obj: any = {};
    message.agentId !== undefined &&
      (obj.agentId = Math.round(message.agentId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAgentByIdRequest>, I>>(
    object: I,
  ): GetAgentByIdRequest {
    const message = createBaseGetAgentByIdRequest();
    message.agentId = object.agentId ?? 0;
    return message;
  },
};

function createBaseGetAgentByIdResponse(): GetAgentByIdResponse {
  return { agent: undefined };
}

export const GetAgentByIdResponse = {
  encode(
    message: GetAgentByIdResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.agent !== undefined) {
      Agent.encode(message.agent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetAgentByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAgentByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agent = Agent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAgentByIdResponse {
    return {
      agent: isSet(object.agent) ? Agent.fromJSON(object.agent) : undefined,
    };
  },

  toJSON(message: GetAgentByIdResponse): unknown {
    const obj: any = {};
    message.agent !== undefined &&
      (obj.agent = message.agent ? Agent.toJSON(message.agent) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAgentByIdResponse>, I>>(
    object: I,
  ): GetAgentByIdResponse {
    const message = createBaseGetAgentByIdResponse();
    message.agent =
      object.agent !== undefined && object.agent !== null
        ? Agent.fromPartial(object.agent)
        : undefined;
    return message;
  },
};

function createBaseDeleteAgentRequest(): DeleteAgentRequest {
  return { agentId: 0 };
}

export const DeleteAgentRequest = {
  encode(
    message: DeleteAgentRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.agentId !== 0) {
      writer.uint32(8).int32(message.agentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAgentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAgentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agentId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteAgentRequest {
    return {
      agentId: isSet(object.agentId) ? Number(object.agentId) : 0,
    };
  },

  toJSON(message: DeleteAgentRequest): unknown {
    const obj: any = {};
    message.agentId !== undefined &&
      (obj.agentId = Math.round(message.agentId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteAgentRequest>, I>>(
    object: I,
  ): DeleteAgentRequest {
    const message = createBaseDeleteAgentRequest();
    message.agentId = object.agentId ?? 0;
    return message;
  },
};

function createBaseDeleteAgentResponse(): DeleteAgentResponse {
  return { agent: undefined };
}

export const DeleteAgentResponse = {
  encode(
    message: DeleteAgentResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.agent !== undefined) {
      Agent.encode(message.agent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAgentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAgentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agent = Agent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteAgentResponse {
    return {
      agent: isSet(object.agent) ? Agent.fromJSON(object.agent) : undefined,
    };
  },

  toJSON(message: DeleteAgentResponse): unknown {
    const obj: any = {};
    message.agent !== undefined &&
      (obj.agent = message.agent ? Agent.toJSON(message.agent) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteAgentResponse>, I>>(
    object: I,
  ): DeleteAgentResponse {
    const message = createBaseDeleteAgentResponse();
    message.agent =
      object.agent !== undefined && object.agent !== null
        ? Agent.fromPartial(object.agent)
        : undefined;
    return message;
  },
};

function createBaseUpdateAgentRequest(): UpdateAgentRequest {
  return { agent: undefined };
}

export const UpdateAgentRequest = {
  encode(
    message: UpdateAgentRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.agent !== undefined) {
      Agent.encode(message.agent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAgentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAgentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agent = Agent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAgentRequest {
    return {
      agent: isSet(object.agent) ? Agent.fromJSON(object.agent) : undefined,
    };
  },

  toJSON(message: UpdateAgentRequest): unknown {
    const obj: any = {};
    message.agent !== undefined &&
      (obj.agent = message.agent ? Agent.toJSON(message.agent) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateAgentRequest>, I>>(
    object: I,
  ): UpdateAgentRequest {
    const message = createBaseUpdateAgentRequest();
    message.agent =
      object.agent !== undefined && object.agent !== null
        ? Agent.fromPartial(object.agent)
        : undefined;
    return message;
  },
};

function createBaseUpdateAgentResponse(): UpdateAgentResponse {
  return { agent: undefined };
}

export const UpdateAgentResponse = {
  encode(
    message: UpdateAgentResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.agent !== undefined) {
      Agent.encode(message.agent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAgentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAgentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agent = Agent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAgentResponse {
    return {
      agent: isSet(object.agent) ? Agent.fromJSON(object.agent) : undefined,
    };
  },

  toJSON(message: UpdateAgentResponse): unknown {
    const obj: any = {};
    message.agent !== undefined &&
      (obj.agent = message.agent ? Agent.toJSON(message.agent) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateAgentResponse>, I>>(
    object: I,
  ): UpdateAgentResponse {
    const message = createBaseUpdateAgentResponse();
    message.agent =
      object.agent !== undefined && object.agent !== null
        ? Agent.fromPartial(object.agent)
        : undefined;
    return message;
  },
};

function createBaseListAgentRequest(): ListAgentRequest {
  return {};
}

export const ListAgentRequest = {
  encode(
    _: ListAgentRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAgentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAgentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ListAgentRequest {
    return {};
  },

  toJSON(_: ListAgentRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListAgentRequest>, I>>(
    _: I,
  ): ListAgentRequest {
    const message = createBaseListAgentRequest();
    return message;
  },
};

function createBaseListAgentResponse(): ListAgentResponse {
  return { agent: [] };
}

export const ListAgentResponse = {
  encode(
    message: ListAgentResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.agent) {
      Agent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAgentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAgentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agent.push(Agent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListAgentResponse {
    return {
      agent: Array.isArray(object?.agent)
        ? object.agent.map((e: any) => Agent.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListAgentResponse): unknown {
    const obj: any = {};
    if (message.agent) {
      obj.agent = message.agent.map((e) => (e ? Agent.toJSON(e) : undefined));
    } else {
      obj.agent = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListAgentResponse>, I>>(
    object: I,
  ): ListAgentResponse {
    const message = createBaseListAgentResponse();
    message.agent = object.agent?.map((e) => Agent.fromPartial(e)) || [];
    return message;
  },
};

export interface AgentsService {
  CreateAgent(request: CreateAgentRequest): Promise<CreateAgentResponse>;
  DeleteAgent(request: DeleteAgentRequest): Promise<DeleteAgentResponse>;
  GetAgentById(request: GetAgentByIdRequest): Promise<GetAgentByIdResponse>;
  UpdateAgent(request: UpdateAgentRequest): Promise<UpdateAgentResponse>;
  ListAgent(request: ListAgentRequest): Promise<ListAgentResponse>;
}

export class AgentsServiceClientImpl implements AgentsService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateAgent = this.CreateAgent.bind(this);
    this.DeleteAgent = this.DeleteAgent.bind(this);
    this.GetAgentById = this.GetAgentById.bind(this);
    this.UpdateAgent = this.UpdateAgent.bind(this);
    this.ListAgent = this.ListAgent.bind(this);
  }
  CreateAgent(request: CreateAgentRequest): Promise<CreateAgentResponse> {
    const data = CreateAgentRequest.encode(request).finish();
    const promise = this.rpc.request('ag.AgentsService', 'CreateAgent', data);
    return promise.then((data) =>
      CreateAgentResponse.decode(new _m0.Reader(data)),
    );
  }

  DeleteAgent(request: DeleteAgentRequest): Promise<DeleteAgentResponse> {
    const data = DeleteAgentRequest.encode(request).finish();
    const promise = this.rpc.request('ag.AgentsService', 'DeleteAgent', data);
    return promise.then((data) =>
      DeleteAgentResponse.decode(new _m0.Reader(data)),
    );
  }

  GetAgentById(request: GetAgentByIdRequest): Promise<GetAgentByIdResponse> {
    const data = GetAgentByIdRequest.encode(request).finish();
    const promise = this.rpc.request('ag.AgentsService', 'GetAgentById', data);
    return promise.then((data) =>
      GetAgentByIdResponse.decode(new _m0.Reader(data)),
    );
  }

  UpdateAgent(request: UpdateAgentRequest): Promise<UpdateAgentResponse> {
    const data = UpdateAgentRequest.encode(request).finish();
    const promise = this.rpc.request('ag.AgentsService', 'UpdateAgent', data);
    return promise.then((data) =>
      UpdateAgentResponse.decode(new _m0.Reader(data)),
    );
  }

  ListAgent(request: ListAgentRequest): Promise<ListAgentResponse> {
    const data = ListAgentRequest.encode(request).finish();
    const promise = this.rpc.request('ag.AgentsService', 'ListAgent', data);
    return promise.then((data) =>
      ListAgentResponse.decode(new _m0.Reader(data)),
    );
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
