/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { Datapoint, DatapointError, Metadata } from "./types";

export const protobufPackage = "sdv.databroker.v1";

export interface GetDatapointsRequest {
  /** A list of requested data points. */
  datapoints: string[];
}

export interface GetDatapointsReply {
  /**
   * Contains the values of the requested data points.
   * If a requested data point is not available, the corresponding Datapoint
   * will have the respective failure value set.
   */
  datapoints: { [key: string]: Datapoint };
}

export interface GetDatapointsReply_DatapointsEntry {
  key: string;
  value: Datapoint | undefined;
}

export interface SetDatapointsRequest {
  /** A map of data points to set */
  datapoints: { [key: string]: Datapoint };
}

export interface SetDatapointsRequest_DatapointsEntry {
  key: string;
  value: Datapoint | undefined;
}

export interface SetDatapointsReply {
  /** A map of errors (if any) */
  errors: { [key: string]: DatapointError };
}

export interface SetDatapointsReply_ErrorsEntry {
  key: string;
  value: DatapointError;
}

export interface SubscribeRequest {
  /**
   * Subscribe to a set of data points (or expressions) described
   * by the provided query.
   * The query syntax is a subset of SQL and is described in more
   * detail in the QUERY.md file.
   */
  query: string;
}

export interface SubscribeReply {
  /**
   * Contains the fields specified by the query.
   * If a requested data point value is not available, the corresponding
   * Datapoint will have it's respective failure value set.
   */
  fields: { [key: string]: Datapoint };
}

export interface SubscribeReply_FieldsEntry {
  key: string;
  value: Datapoint | undefined;
}

export interface GetMetadataRequest {
  /**
   * Request metadata for a list of data points referenced by their names.
   * e.g. "Vehicle.Cabin.Seat.Row1.Pos1.Position" or "Vehicle.Speed".
   *
   * If no names are provided, metadata for all known data points will be
   * returned.
   */
  names: string[];
}

export interface GetMetadataReply {
  /**
   * Contains metadata of the requested data points. If a data point
   * doesn't exist (i.e. not known to the Data Broker) the corresponding
   * Metadata isn't part of the returned list.
   */
  list: Metadata[];
}

function createBaseGetDatapointsRequest(): GetDatapointsRequest {
  return { datapoints: [] };
}

export const GetDatapointsRequest = {
  encode(message: GetDatapointsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.datapoints) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDatapointsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDatapointsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.datapoints.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetDatapointsRequest>): GetDatapointsRequest {
    return GetDatapointsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetDatapointsRequest>): GetDatapointsRequest {
    const message = createBaseGetDatapointsRequest();
    message.datapoints = object.datapoints?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetDatapointsReply(): GetDatapointsReply {
  return { datapoints: {} };
}

export const GetDatapointsReply = {
  encode(message: GetDatapointsReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.datapoints).forEach(([key, value]) => {
      GetDatapointsReply_DatapointsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDatapointsReply {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDatapointsReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = GetDatapointsReply_DatapointsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.datapoints[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetDatapointsReply>): GetDatapointsReply {
    return GetDatapointsReply.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetDatapointsReply>): GetDatapointsReply {
    const message = createBaseGetDatapointsReply();
    message.datapoints = Object.entries(object.datapoints ?? {}).reduce<{ [key: string]: Datapoint }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Datapoint.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseGetDatapointsReply_DatapointsEntry(): GetDatapointsReply_DatapointsEntry {
  return { key: "", value: undefined };
}

export const GetDatapointsReply_DatapointsEntry = {
  encode(message: GetDatapointsReply_DatapointsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Datapoint.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDatapointsReply_DatapointsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDatapointsReply_DatapointsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Datapoint.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetDatapointsReply_DatapointsEntry>): GetDatapointsReply_DatapointsEntry {
    return GetDatapointsReply_DatapointsEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetDatapointsReply_DatapointsEntry>): GetDatapointsReply_DatapointsEntry {
    const message = createBaseGetDatapointsReply_DatapointsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Datapoint.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseSetDatapointsRequest(): SetDatapointsRequest {
  return { datapoints: {} };
}

export const SetDatapointsRequest = {
  encode(message: SetDatapointsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.datapoints).forEach(([key, value]) => {
      SetDatapointsRequest_DatapointsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetDatapointsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetDatapointsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = SetDatapointsRequest_DatapointsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.datapoints[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SetDatapointsRequest>): SetDatapointsRequest {
    return SetDatapointsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetDatapointsRequest>): SetDatapointsRequest {
    const message = createBaseSetDatapointsRequest();
    message.datapoints = Object.entries(object.datapoints ?? {}).reduce<{ [key: string]: Datapoint }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Datapoint.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseSetDatapointsRequest_DatapointsEntry(): SetDatapointsRequest_DatapointsEntry {
  return { key: "", value: undefined };
}

export const SetDatapointsRequest_DatapointsEntry = {
  encode(message: SetDatapointsRequest_DatapointsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Datapoint.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetDatapointsRequest_DatapointsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetDatapointsRequest_DatapointsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Datapoint.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SetDatapointsRequest_DatapointsEntry>): SetDatapointsRequest_DatapointsEntry {
    return SetDatapointsRequest_DatapointsEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetDatapointsRequest_DatapointsEntry>): SetDatapointsRequest_DatapointsEntry {
    const message = createBaseSetDatapointsRequest_DatapointsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Datapoint.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseSetDatapointsReply(): SetDatapointsReply {
  return { errors: {} };
}

export const SetDatapointsReply = {
  encode(message: SetDatapointsReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.errors).forEach(([key, value]) => {
      SetDatapointsReply_ErrorsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetDatapointsReply {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetDatapointsReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = SetDatapointsReply_ErrorsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.errors[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SetDatapointsReply>): SetDatapointsReply {
    return SetDatapointsReply.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetDatapointsReply>): SetDatapointsReply {
    const message = createBaseSetDatapointsReply();
    message.errors = Object.entries(object.errors ?? {}).reduce<{ [key: string]: DatapointError }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value as DatapointError;
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseSetDatapointsReply_ErrorsEntry(): SetDatapointsReply_ErrorsEntry {
  return { key: "", value: 0 };
}

export const SetDatapointsReply_ErrorsEntry = {
  encode(message: SetDatapointsReply_ErrorsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetDatapointsReply_ErrorsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetDatapointsReply_ErrorsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SetDatapointsReply_ErrorsEntry>): SetDatapointsReply_ErrorsEntry {
    return SetDatapointsReply_ErrorsEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetDatapointsReply_ErrorsEntry>): SetDatapointsReply_ErrorsEntry {
    const message = createBaseSetDatapointsReply_ErrorsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseSubscribeRequest(): SubscribeRequest {
  return { query: "" };
}

export const SubscribeRequest = {
  encode(message: SubscribeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.query !== "") {
      writer.uint32(18).string(message.query);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.query = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SubscribeRequest>): SubscribeRequest {
    return SubscribeRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SubscribeRequest>): SubscribeRequest {
    const message = createBaseSubscribeRequest();
    message.query = object.query ?? "";
    return message;
  },
};

function createBaseSubscribeReply(): SubscribeReply {
  return { fields: {} };
}

export const SubscribeReply = {
  encode(message: SubscribeReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.fields).forEach(([key, value]) => {
      SubscribeReply_FieldsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeReply {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = SubscribeReply_FieldsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.fields[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SubscribeReply>): SubscribeReply {
    return SubscribeReply.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SubscribeReply>): SubscribeReply {
    const message = createBaseSubscribeReply();
    message.fields = Object.entries(object.fields ?? {}).reduce<{ [key: string]: Datapoint }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Datapoint.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseSubscribeReply_FieldsEntry(): SubscribeReply_FieldsEntry {
  return { key: "", value: undefined };
}

export const SubscribeReply_FieldsEntry = {
  encode(message: SubscribeReply_FieldsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Datapoint.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeReply_FieldsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeReply_FieldsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Datapoint.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SubscribeReply_FieldsEntry>): SubscribeReply_FieldsEntry {
    return SubscribeReply_FieldsEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SubscribeReply_FieldsEntry>): SubscribeReply_FieldsEntry {
    const message = createBaseSubscribeReply_FieldsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Datapoint.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseGetMetadataRequest(): GetMetadataRequest {
  return { names: [] };
}

export const GetMetadataRequest = {
  encode(message: GetMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.names) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.names.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetMetadataRequest>): GetMetadataRequest {
    return GetMetadataRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetMetadataRequest>): GetMetadataRequest {
    const message = createBaseGetMetadataRequest();
    message.names = object.names?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetMetadataReply(): GetMetadataReply {
  return { list: [] };
}

export const GetMetadataReply = {
  encode(message: GetMetadataReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.list) {
      Metadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMetadataReply {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMetadataReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.list.push(Metadata.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetMetadataReply>): GetMetadataReply {
    return GetMetadataReply.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetMetadataReply>): GetMetadataReply {
    const message = createBaseGetMetadataReply();
    message.list = object.list?.map((e) => Metadata.fromPartial(e)) || [];
    return message;
  },
};

export type BrokerDefinition = typeof BrokerDefinition;
export const BrokerDefinition = {
  name: "Broker",
  fullName: "sdv.databroker.v1.Broker",
  methods: {
    /**
     * Request a set of datapoints (values)
     *
     * Returns a list of requested data points.
     *
     * InvalidArgument is returned if the request is malformed.
     */
    getDatapoints: {
      name: "GetDatapoints",
      requestType: GetDatapointsRequest,
      requestStream: false,
      responseType: GetDatapointsReply,
      responseStream: false,
      options: {},
    },
    /** Set a datapoint (values) */
    setDatapoints: {
      name: "SetDatapoints",
      requestType: SetDatapointsRequest,
      requestStream: false,
      responseType: SetDatapointsReply,
      responseStream: false,
      options: {},
    },
    /**
     * Subscribe to a set of data points or conditional expressions
     * using the Data Broker Query Syntax (described in QUERY.md)
     *
     * Returns a stream of replies.
     *
     * InvalidArgument is returned if the request is malformed.
     */
    subscribe: {
      name: "Subscribe",
      requestType: SubscribeRequest,
      requestStream: false,
      responseType: SubscribeReply,
      responseStream: true,
      options: {},
    },
    /**
     * Request the metadata of a set of datapoints
     *
     * Returns metadata of the requested data points that exist.
     */
    getMetadata: {
      name: "GetMetadata",
      requestType: GetMetadataRequest,
      requestStream: false,
      responseType: GetMetadataReply,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface BrokerServiceImplementation<CallContextExt = {}> {
  /**
   * Request a set of datapoints (values)
   *
   * Returns a list of requested data points.
   *
   * InvalidArgument is returned if the request is malformed.
   */
  getDatapoints(
    request: GetDatapointsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetDatapointsReply>>;
  /** Set a datapoint (values) */
  setDatapoints(
    request: SetDatapointsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SetDatapointsReply>>;
  /**
   * Subscribe to a set of data points or conditional expressions
   * using the Data Broker Query Syntax (described in QUERY.md)
   *
   * Returns a stream of replies.
   *
   * InvalidArgument is returned if the request is malformed.
   */
  subscribe(
    request: SubscribeRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<SubscribeReply>>;
  /**
   * Request the metadata of a set of datapoints
   *
   * Returns metadata of the requested data points that exist.
   */
  getMetadata(
    request: GetMetadataRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetMetadataReply>>;
}

export interface BrokerClient<CallOptionsExt = {}> {
  /**
   * Request a set of datapoints (values)
   *
   * Returns a list of requested data points.
   *
   * InvalidArgument is returned if the request is malformed.
   */
  getDatapoints(
    request: DeepPartial<GetDatapointsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetDatapointsReply>;
  /** Set a datapoint (values) */
  setDatapoints(
    request: DeepPartial<SetDatapointsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SetDatapointsReply>;
  /**
   * Subscribe to a set of data points or conditional expressions
   * using the Data Broker Query Syntax (described in QUERY.md)
   *
   * Returns a stream of replies.
   *
   * InvalidArgument is returned if the request is malformed.
   */
  subscribe(
    request: DeepPartial<SubscribeRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<SubscribeReply>;
  /**
   * Request the metadata of a set of datapoints
   *
   * Returns metadata of the requested data points that exist.
   */
  getMetadata(
    request: DeepPartial<GetMetadataRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetMetadataReply>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
