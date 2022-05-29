/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = 'pp';

export interface Property {
  propertyId: number;
  address: string;
  status: string;
  rooms: number;
  toilets: number;
  park: number;
  size: number;
  description: string;
  features: string;
  agentId: number;
}

export interface CreatePropertyRequest {
  property: Property | undefined;
}

export interface CreatePropertyResponse {
  property: Property | undefined;
}

export interface GetPropertyByIdRequest {
  propertyId: number;
}

export interface GetPropertyByIdResponse {
  property: Property | undefined;
}

export interface DeletePropertyRequest {
  propertyId: number;
}

export interface DeletePropertyResponse {
  property: Property | undefined;
}

export interface UpdatePropertyRequest {
  property: Property | undefined;
}

export interface UpdatePropertyResponse {
  Property: Property | undefined;
}

export interface ListPropertyRequest {}

export interface ListPropertyResponse {
  property: Property[];
}

export interface ListPropertyByAgentIdRequest {
  agentId: number;
}

export interface ListPropertyByAgentIdResponse {
  Property: Property[];
}

function createBaseProperty(): Property {
  return {
    propertyId: 0,
    address: '',
    status: '',
    rooms: 0,
    toilets: 0,
    park: 0,
    size: 0,
    description: '',
    features: '',
    agentId: 0,
  };
}

export const Property = {
  encode(
    message: Property,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.propertyId !== 0) {
      writer.uint32(8).int32(message.propertyId);
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address);
    }
    if (message.status !== '') {
      writer.uint32(26).string(message.status);
    }
    if (message.rooms !== 0) {
      writer.uint32(32).int32(message.rooms);
    }
    if (message.toilets !== 0) {
      writer.uint32(40).int32(message.toilets);
    }
    if (message.park !== 0) {
      writer.uint32(48).int32(message.park);
    }
    if (message.size !== 0) {
      writer.uint32(56).int32(message.size);
    }
    if (message.description !== '') {
      writer.uint32(66).string(message.description);
    }
    if (message.features !== '') {
      writer.uint32(74).string(message.features);
    }
    if (message.agentId !== 0) {
      writer.uint32(80).int32(message.agentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Property {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.propertyId = reader.int32();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.status = reader.string();
          break;
        case 4:
          message.rooms = reader.int32();
          break;
        case 5:
          message.toilets = reader.int32();
          break;
        case 6:
          message.park = reader.int32();
          break;
        case 7:
          message.size = reader.int32();
          break;
        case 8:
          message.description = reader.string();
          break;
        case 9:
          message.features = reader.string();
          break;
        case 10:
          message.agentId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Property {
    return {
      propertyId: isSet(object.propertyId) ? Number(object.propertyId) : 0,
      address: isSet(object.address) ? String(object.address) : '',
      status: isSet(object.status) ? String(object.status) : '',
      rooms: isSet(object.rooms) ? Number(object.rooms) : 0,
      toilets: isSet(object.toilets) ? Number(object.toilets) : 0,
      park: isSet(object.park) ? Number(object.park) : 0,
      size: isSet(object.size) ? Number(object.size) : 0,
      description: isSet(object.description) ? String(object.description) : '',
      features: isSet(object.features) ? String(object.features) : '',
      agentId: isSet(object.agentId) ? Number(object.agentId) : 0,
    };
  },

  toJSON(message: Property): unknown {
    const obj: any = {};
    message.propertyId !== undefined &&
      (obj.propertyId = Math.round(message.propertyId));
    message.address !== undefined && (obj.address = message.address);
    message.status !== undefined && (obj.status = message.status);
    message.rooms !== undefined && (obj.rooms = Math.round(message.rooms));
    message.toilets !== undefined &&
      (obj.toilets = Math.round(message.toilets));
    message.park !== undefined && (obj.park = Math.round(message.park));
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.description !== undefined &&
      (obj.description = message.description);
    message.features !== undefined && (obj.features = message.features);
    message.agentId !== undefined &&
      (obj.agentId = Math.round(message.agentId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Property>, I>>(object: I): Property {
    const message = createBaseProperty();
    message.propertyId = object.propertyId ?? 0;
    message.address = object.address ?? '';
    message.status = object.status ?? '';
    message.rooms = object.rooms ?? 0;
    message.toilets = object.toilets ?? 0;
    message.park = object.park ?? 0;
    message.size = object.size ?? 0;
    message.description = object.description ?? '';
    message.features = object.features ?? '';
    message.agentId = object.agentId ?? 0;
    return message;
  },
};

function createBaseCreatePropertyRequest(): CreatePropertyRequest {
  return { property: undefined };
}

export const CreatePropertyRequest = {
  encode(
    message: CreatePropertyRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.property !== undefined) {
      Property.encode(message.property, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CreatePropertyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePropertyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.property = Property.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePropertyRequest {
    return {
      property: isSet(object.property)
        ? Property.fromJSON(object.property)
        : undefined,
    };
  },

  toJSON(message: CreatePropertyRequest): unknown {
    const obj: any = {};
    message.property !== undefined &&
      (obj.property = message.property
        ? Property.toJSON(message.property)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePropertyRequest>, I>>(
    object: I,
  ): CreatePropertyRequest {
    const message = createBaseCreatePropertyRequest();
    message.property =
      object.property !== undefined && object.property !== null
        ? Property.fromPartial(object.property)
        : undefined;
    return message;
  },
};

function createBaseCreatePropertyResponse(): CreatePropertyResponse {
  return { property: undefined };
}

export const CreatePropertyResponse = {
  encode(
    message: CreatePropertyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.property !== undefined) {
      Property.encode(message.property, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CreatePropertyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePropertyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.property = Property.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePropertyResponse {
    return {
      property: isSet(object.property)
        ? Property.fromJSON(object.property)
        : undefined,
    };
  },

  toJSON(message: CreatePropertyResponse): unknown {
    const obj: any = {};
    message.property !== undefined &&
      (obj.property = message.property
        ? Property.toJSON(message.property)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePropertyResponse>, I>>(
    object: I,
  ): CreatePropertyResponse {
    const message = createBaseCreatePropertyResponse();
    message.property =
      object.property !== undefined && object.property !== null
        ? Property.fromPartial(object.property)
        : undefined;
    return message;
  },
};

function createBaseGetPropertyByIdRequest(): GetPropertyByIdRequest {
  return { propertyId: 0 };
}

export const GetPropertyByIdRequest = {
  encode(
    message: GetPropertyByIdRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.propertyId !== 0) {
      writer.uint32(8).int32(message.propertyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetPropertyByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPropertyByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.propertyId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPropertyByIdRequest {
    return {
      propertyId: isSet(object.propertyId) ? Number(object.propertyId) : 0,
    };
  },

  toJSON(message: GetPropertyByIdRequest): unknown {
    const obj: any = {};
    message.propertyId !== undefined &&
      (obj.propertyId = Math.round(message.propertyId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPropertyByIdRequest>, I>>(
    object: I,
  ): GetPropertyByIdRequest {
    const message = createBaseGetPropertyByIdRequest();
    message.propertyId = object.propertyId ?? 0;
    return message;
  },
};

function createBaseGetPropertyByIdResponse(): GetPropertyByIdResponse {
  return { property: undefined };
}

export const GetPropertyByIdResponse = {
  encode(
    message: GetPropertyByIdResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.property !== undefined) {
      Property.encode(message.property, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetPropertyByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPropertyByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.property = Property.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPropertyByIdResponse {
    return {
      property: isSet(object.property)
        ? Property.fromJSON(object.property)
        : undefined,
    };
  },

  toJSON(message: GetPropertyByIdResponse): unknown {
    const obj: any = {};
    message.property !== undefined &&
      (obj.property = message.property
        ? Property.toJSON(message.property)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPropertyByIdResponse>, I>>(
    object: I,
  ): GetPropertyByIdResponse {
    const message = createBaseGetPropertyByIdResponse();
    message.property =
      object.property !== undefined && object.property !== null
        ? Property.fromPartial(object.property)
        : undefined;
    return message;
  },
};

function createBaseDeletePropertyRequest(): DeletePropertyRequest {
  return { propertyId: 0 };
}

export const DeletePropertyRequest = {
  encode(
    message: DeletePropertyRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.propertyId !== 0) {
      writer.uint32(8).int32(message.propertyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DeletePropertyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePropertyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.propertyId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeletePropertyRequest {
    return {
      propertyId: isSet(object.propertyId) ? Number(object.propertyId) : 0,
    };
  },

  toJSON(message: DeletePropertyRequest): unknown {
    const obj: any = {};
    message.propertyId !== undefined &&
      (obj.propertyId = Math.round(message.propertyId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeletePropertyRequest>, I>>(
    object: I,
  ): DeletePropertyRequest {
    const message = createBaseDeletePropertyRequest();
    message.propertyId = object.propertyId ?? 0;
    return message;
  },
};

function createBaseDeletePropertyResponse(): DeletePropertyResponse {
  return { property: undefined };
}

export const DeletePropertyResponse = {
  encode(
    message: DeletePropertyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.property !== undefined) {
      Property.encode(message.property, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DeletePropertyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePropertyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.property = Property.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeletePropertyResponse {
    return {
      property: isSet(object.property)
        ? Property.fromJSON(object.property)
        : undefined,
    };
  },

  toJSON(message: DeletePropertyResponse): unknown {
    const obj: any = {};
    message.property !== undefined &&
      (obj.property = message.property
        ? Property.toJSON(message.property)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeletePropertyResponse>, I>>(
    object: I,
  ): DeletePropertyResponse {
    const message = createBaseDeletePropertyResponse();
    message.property =
      object.property !== undefined && object.property !== null
        ? Property.fromPartial(object.property)
        : undefined;
    return message;
  },
};

function createBaseUpdatePropertyRequest(): UpdatePropertyRequest {
  return { property: undefined };
}

export const UpdatePropertyRequest = {
  encode(
    message: UpdatePropertyRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.property !== undefined) {
      Property.encode(message.property, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UpdatePropertyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePropertyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.property = Property.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePropertyRequest {
    return {
      property: isSet(object.property)
        ? Property.fromJSON(object.property)
        : undefined,
    };
  },

  toJSON(message: UpdatePropertyRequest): unknown {
    const obj: any = {};
    message.property !== undefined &&
      (obj.property = message.property
        ? Property.toJSON(message.property)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdatePropertyRequest>, I>>(
    object: I,
  ): UpdatePropertyRequest {
    const message = createBaseUpdatePropertyRequest();
    message.property =
      object.property !== undefined && object.property !== null
        ? Property.fromPartial(object.property)
        : undefined;
    return message;
  },
};

function createBaseUpdatePropertyResponse(): UpdatePropertyResponse {
  return { Property: undefined };
}

export const UpdatePropertyResponse = {
  encode(
    message: UpdatePropertyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.Property !== undefined) {
      Property.encode(message.Property, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UpdatePropertyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePropertyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Property = Property.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePropertyResponse {
    return {
      Property: isSet(object.Property)
        ? Property.fromJSON(object.Property)
        : undefined,
    };
  },

  toJSON(message: UpdatePropertyResponse): unknown {
    const obj: any = {};
    message.Property !== undefined &&
      (obj.Property = message.Property
        ? Property.toJSON(message.Property)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdatePropertyResponse>, I>>(
    object: I,
  ): UpdatePropertyResponse {
    const message = createBaseUpdatePropertyResponse();
    message.Property =
      object.Property !== undefined && object.Property !== null
        ? Property.fromPartial(object.Property)
        : undefined;
    return message;
  },
};

function createBaseListPropertyRequest(): ListPropertyRequest {
  return {};
}

export const ListPropertyRequest = {
  encode(
    _: ListPropertyRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPropertyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPropertyRequest();
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

  fromJSON(_: any): ListPropertyRequest {
    return {};
  },

  toJSON(_: ListPropertyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListPropertyRequest>, I>>(
    _: I,
  ): ListPropertyRequest {
    const message = createBaseListPropertyRequest();
    return message;
  },
};

function createBaseListPropertyResponse(): ListPropertyResponse {
  return { property: [] };
}

export const ListPropertyResponse = {
  encode(
    message: ListPropertyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.property) {
      Property.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ListPropertyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPropertyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.property.push(Property.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListPropertyResponse {
    return {
      property: Array.isArray(object?.property)
        ? object.property.map((e: any) => Property.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListPropertyResponse): unknown {
    const obj: any = {};
    if (message.property) {
      obj.property = message.property.map((e) =>
        e ? Property.toJSON(e) : undefined,
      );
    } else {
      obj.property = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListPropertyResponse>, I>>(
    object: I,
  ): ListPropertyResponse {
    const message = createBaseListPropertyResponse();
    message.property =
      object.property?.map((e) => Property.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListPropertyByAgentIdRequest(): ListPropertyByAgentIdRequest {
  return { agentId: 0 };
}

export const ListPropertyByAgentIdRequest = {
  encode(
    message: ListPropertyByAgentIdRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.agentId !== 0) {
      writer.uint32(8).int32(message.agentId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ListPropertyByAgentIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPropertyByAgentIdRequest();
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

  fromJSON(object: any): ListPropertyByAgentIdRequest {
    return {
      agentId: isSet(object.agentId) ? Number(object.agentId) : 0,
    };
  },

  toJSON(message: ListPropertyByAgentIdRequest): unknown {
    const obj: any = {};
    message.agentId !== undefined &&
      (obj.agentId = Math.round(message.agentId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListPropertyByAgentIdRequest>, I>>(
    object: I,
  ): ListPropertyByAgentIdRequest {
    const message = createBaseListPropertyByAgentIdRequest();
    message.agentId = object.agentId ?? 0;
    return message;
  },
};

function createBaseListPropertyByAgentIdResponse(): ListPropertyByAgentIdResponse {
  return { Property: [] };
}

export const ListPropertyByAgentIdResponse = {
  encode(
    message: ListPropertyByAgentIdResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.Property) {
      Property.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ListPropertyByAgentIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPropertyByAgentIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Property.push(Property.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListPropertyByAgentIdResponse {
    return {
      Property: Array.isArray(object?.Property)
        ? object.Property.map((e: any) => Property.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListPropertyByAgentIdResponse): unknown {
    const obj: any = {};
    if (message.Property) {
      obj.Property = message.Property.map((e) =>
        e ? Property.toJSON(e) : undefined,
      );
    } else {
      obj.Property = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListPropertyByAgentIdResponse>, I>>(
    object: I,
  ): ListPropertyByAgentIdResponse {
    const message = createBaseListPropertyByAgentIdResponse();
    message.Property =
      object.Property?.map((e) => Property.fromPartial(e)) || [];
    return message;
  },
};

export interface PropertysService {
  CreateProperty(
    request: CreatePropertyRequest,
  ): Promise<CreatePropertyResponse>;
  DeleteProperty(
    request: DeletePropertyRequest,
  ): Promise<DeletePropertyResponse>;
  GetPropertyById(
    request: GetPropertyByIdRequest,
  ): Promise<GetPropertyByIdResponse>;
  UpdateProperty(
    request: UpdatePropertyRequest,
  ): Promise<UpdatePropertyResponse>;
  ListProperty(request: ListPropertyRequest): Promise<ListPropertyResponse>;
  ListPropertyByAgent(
    request: ListPropertyByAgentIdRequest,
  ): Promise<ListPropertyByAgentIdResponse>;
}

export class PropertysServiceClientImpl implements PropertysService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateProperty = this.CreateProperty.bind(this);
    this.DeleteProperty = this.DeleteProperty.bind(this);
    this.GetPropertyById = this.GetPropertyById.bind(this);
    this.UpdateProperty = this.UpdateProperty.bind(this);
    this.ListProperty = this.ListProperty.bind(this);
    this.ListPropertyByAgent = this.ListPropertyByAgent.bind(this);
  }
  CreateProperty(
    request: CreatePropertyRequest,
  ): Promise<CreatePropertyResponse> {
    const data = CreatePropertyRequest.encode(request).finish();
    const promise = this.rpc.request(
      'pp.PropertysService',
      'CreateProperty',
      data,
    );
    return promise.then((data) =>
      CreatePropertyResponse.decode(new _m0.Reader(data)),
    );
  }

  DeleteProperty(
    request: DeletePropertyRequest,
  ): Promise<DeletePropertyResponse> {
    const data = DeletePropertyRequest.encode(request).finish();
    const promise = this.rpc.request(
      'pp.PropertysService',
      'DeleteProperty',
      data,
    );
    return promise.then((data) =>
      DeletePropertyResponse.decode(new _m0.Reader(data)),
    );
  }

  GetPropertyById(
    request: GetPropertyByIdRequest,
  ): Promise<GetPropertyByIdResponse> {
    const data = GetPropertyByIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      'pp.PropertysService',
      'GetPropertyById',
      data,
    );
    return promise.then((data) =>
      GetPropertyByIdResponse.decode(new _m0.Reader(data)),
    );
  }

  UpdateProperty(
    request: UpdatePropertyRequest,
  ): Promise<UpdatePropertyResponse> {
    const data = UpdatePropertyRequest.encode(request).finish();
    const promise = this.rpc.request(
      'pp.PropertysService',
      'UpdateProperty',
      data,
    );
    return promise.then((data) =>
      UpdatePropertyResponse.decode(new _m0.Reader(data)),
    );
  }

  ListProperty(request: ListPropertyRequest): Promise<ListPropertyResponse> {
    const data = ListPropertyRequest.encode(request).finish();
    const promise = this.rpc.request(
      'pp.PropertysService',
      'ListProperty',
      data,
    );
    return promise.then((data) =>
      ListPropertyResponse.decode(new _m0.Reader(data)),
    );
  }

  ListPropertyByAgent(
    request: ListPropertyByAgentIdRequest,
  ): Promise<ListPropertyByAgentIdResponse> {
    const data = ListPropertyByAgentIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      'pp.PropertysService',
      'ListPropertyByAgent',
      data,
    );
    return promise.then((data) =>
      ListPropertyByAgentIdResponse.decode(new _m0.Reader(data)),
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
