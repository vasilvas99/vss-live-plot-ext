/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import Long = require("long");

export const protobufPackage = "sdv.databroker.v1";

/**
 * Data type of a signal
 *
 * Protobuf doesn't support int8, int16, uint8 or uint16.
 * These are mapped to sint32 and uint32 respectively.
 */
export enum DataType {
  STRING = 0,
  BOOL = 1,
  INT8 = 2,
  INT16 = 3,
  INT32 = 4,
  INT64 = 5,
  UINT8 = 6,
  UINT16 = 7,
  UINT32 = 8,
  UINT64 = 9,
  FLOAT = 10,
  DOUBLE = 11,
  TIMESTAMP = 12,
  STRING_ARRAY = 20,
  BOOL_ARRAY = 21,
  INT8_ARRAY = 22,
  INT16_ARRAY = 23,
  INT32_ARRAY = 24,
  INT64_ARRAY = 25,
  UINT8_ARRAY = 26,
  UINT16_ARRAY = 27,
  UINT32_ARRAY = 28,
  UINT64_ARRAY = 29,
  FLOAT_ARRAY = 30,
  DOUBLE_ARRAY = 31,
  TIMESTAMP_ARRAY = 32,
  UNRECOGNIZED = -1,
}

export enum DatapointError {
  UNKNOWN_DATAPOINT = 0,
  INVALID_TYPE = 1,
  ACCESS_DENIED = 2,
  INTERNAL_ERROR = 3,
  OUT_OF_BOUNDS = 4,
  UNRECOGNIZED = -1,
}

export enum EntryType {
  ENTRY_TYPE_UNSPECIFIED = 0,
  ENTRY_TYPE_SENSOR = 1,
  ENTRY_TYPE_ACTUATOR = 2,
  ENTRY_TYPE_ATTRIBUTE = 3,
  UNRECOGNIZED = -1,
}

export enum ChangeType {
  /** STATIC - Value never changes */
  STATIC = 0,
  /** ON_CHANGE - Updates are provided every time the value changes (i.e. */
  ON_CHANGE = 1,
  /** CONTINUOUS - window is open / closed) */
  CONTINUOUS = 2,
  UNRECOGNIZED = -1,
}

export interface StringArray {
  values: string[];
}

export interface BoolArray {
  values: boolean[];
}

export interface Int32Array {
  values: number[];
}

export interface Int64Array {
  values: number[];
}

export interface Uint32Array {
  values: number[];
}

export interface Uint64Array {
  values: number[];
}

export interface FloatArray {
  values: number[];
}

export interface DoubleArray {
  values: number[];
}

export interface Datapoint {
  /** Timestamp of the value */
  timestamp: Date | undefined;
  value?:
    | { $case: "failureValue"; failureValue: Datapoint_Failure }
    | { $case: "stringValue"; stringValue: string }
    | { $case: "boolValue"; boolValue: boolean }
    | { $case: "int32Value"; int32Value: number }
    | { $case: "int64Value"; int64Value: number }
    | { $case: "uint32Value"; uint32Value: number }
    | { $case: "uint64Value"; uint64Value: number }
    | { $case: "floatValue"; floatValue: number }
    | { $case: "doubleValue"; doubleValue: number }
    | { $case: "stringArray"; stringArray: StringArray }
    | { $case: "boolArray"; boolArray: BoolArray }
    | { $case: "int32Array"; int32Array: Int32Array }
    | { $case: "int64Array"; int64Array: Int64Array }
    | { $case: "uint32Array"; uint32Array: Uint32Array }
    | { $case: "uint64Array"; uint64Array: Uint64Array }
    | { $case: "floatArray"; floatArray: FloatArray }
    | { $case: "doubleArray"; doubleArray: DoubleArray }
    | undefined;
}

export enum Datapoint_Failure {
  /** INVALID_VALUE - The data point is known, but doesn't have a valid value */
  INVALID_VALUE = 0,
  /** NOT_AVAILABLE - The data point is known, but no value is available */
  NOT_AVAILABLE = 1,
  /** UNKNOWN_DATAPOINT - Unknown datapoint */
  UNKNOWN_DATAPOINT = 2,
  /** ACCESS_DENIED - Access denied */
  ACCESS_DENIED = 3,
  /** INTERNAL_ERROR - Unexpected internal error */
  INTERNAL_ERROR = 4,
  UNRECOGNIZED = -1,
}

export interface Metadata {
  /**
   * Id to be used in "get" and "subscribe" requests. Ids stay valid during
   * one power cycle, only.
   */
  id: number;
  entryType: EntryType;
  name: string;
  dataType: DataType;
  /** CONTINUOUS or STATIC or ON_CHANGE */
  changeType: ChangeType;
  description: string;
}

function createBaseStringArray(): StringArray {
  return { values: [] };
}

export const StringArray = {
  encode(message: StringArray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringArray {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.values.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<StringArray>): StringArray {
    return StringArray.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StringArray>): StringArray {
    const message = createBaseStringArray();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseBoolArray(): BoolArray {
  return { values: [] };
}

export const BoolArray = {
  encode(message: BoolArray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.values) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BoolArray {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoolArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.values.push(reader.bool());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.values.push(reader.bool());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<BoolArray>): BoolArray {
    return BoolArray.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<BoolArray>): BoolArray {
    const message = createBaseBoolArray();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseInt32Array(): Int32Array {
  return { values: [] };
}

export const Int32Array = {
  encode(message: Int32Array, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.values) {
      writer.sint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Int32Array {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt32Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.values.push(reader.sint32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.values.push(reader.sint32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Int32Array>): Int32Array {
    return Int32Array.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Int32Array>): Int32Array {
    const message = createBaseInt32Array();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseInt64Array(): Int64Array {
  return { values: [] };
}

export const Int64Array = {
  encode(message: Int64Array, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.values) {
      writer.sint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Int64Array {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt64Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.values.push(longToNumber(reader.sint64() as Long));

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.values.push(longToNumber(reader.sint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Int64Array>): Int64Array {
    return Int64Array.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Int64Array>): Int64Array {
    const message = createBaseInt64Array();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseUint32Array(): Uint32Array {
  return { values: [] };
}

export const Uint32Array = {
  encode(message: Uint32Array, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.values) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Uint32Array {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUint32Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.values.push(reader.uint32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.values.push(reader.uint32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Uint32Array>): Uint32Array {
    return Uint32Array.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Uint32Array>): Uint32Array {
    const message = createBaseUint32Array();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseUint64Array(): Uint64Array {
  return { values: [] };
}

export const Uint64Array = {
  encode(message: Uint64Array, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.values) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Uint64Array {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUint64Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.values.push(longToNumber(reader.uint64() as Long));

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.values.push(longToNumber(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Uint64Array>): Uint64Array {
    return Uint64Array.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Uint64Array>): Uint64Array {
    const message = createBaseUint64Array();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseFloatArray(): FloatArray {
  return { values: [] };
}

export const FloatArray = {
  encode(message: FloatArray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.values) {
      writer.float(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FloatArray {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFloatArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 13) {
            message.values.push(reader.float());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.values.push(reader.float());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<FloatArray>): FloatArray {
    return FloatArray.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FloatArray>): FloatArray {
    const message = createBaseFloatArray();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseDoubleArray(): DoubleArray {
  return { values: [] };
}

export const DoubleArray = {
  encode(message: DoubleArray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.values) {
      writer.double(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DoubleArray {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDoubleArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 9) {
            message.values.push(reader.double());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.values.push(reader.double());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<DoubleArray>): DoubleArray {
    return DoubleArray.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DoubleArray>): DoubleArray {
    const message = createBaseDoubleArray();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseDatapoint(): Datapoint {
  return { timestamp: undefined, value: undefined };
}

export const Datapoint = {
  encode(message: Datapoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    switch (message.value?.$case) {
      case "failureValue":
        writer.uint32(80).int32(message.value.failureValue);
        break;
      case "stringValue":
        writer.uint32(90).string(message.value.stringValue);
        break;
      case "boolValue":
        writer.uint32(96).bool(message.value.boolValue);
        break;
      case "int32Value":
        writer.uint32(104).sint32(message.value.int32Value);
        break;
      case "int64Value":
        writer.uint32(112).sint64(message.value.int64Value);
        break;
      case "uint32Value":
        writer.uint32(120).uint32(message.value.uint32Value);
        break;
      case "uint64Value":
        writer.uint32(128).uint64(message.value.uint64Value);
        break;
      case "floatValue":
        writer.uint32(141).float(message.value.floatValue);
        break;
      case "doubleValue":
        writer.uint32(145).double(message.value.doubleValue);
        break;
      case "stringArray":
        StringArray.encode(message.value.stringArray, writer.uint32(170).fork()).ldelim();
        break;
      case "boolArray":
        BoolArray.encode(message.value.boolArray, writer.uint32(178).fork()).ldelim();
        break;
      case "int32Array":
        Int32Array.encode(message.value.int32Array, writer.uint32(186).fork()).ldelim();
        break;
      case "int64Array":
        Int64Array.encode(message.value.int64Array, writer.uint32(194).fork()).ldelim();
        break;
      case "uint32Array":
        Uint32Array.encode(message.value.uint32Array, writer.uint32(202).fork()).ldelim();
        break;
      case "uint64Array":
        Uint64Array.encode(message.value.uint64Array, writer.uint32(210).fork()).ldelim();
        break;
      case "floatArray":
        FloatArray.encode(message.value.floatArray, writer.uint32(218).fork()).ldelim();
        break;
      case "doubleArray":
        DoubleArray.encode(message.value.doubleArray, writer.uint32(226).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Datapoint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatapoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.value = { $case: "failureValue", failureValue: reader.int32() as any };
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.value = { $case: "stringValue", stringValue: reader.string() };
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.value = { $case: "boolValue", boolValue: reader.bool() };
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.value = { $case: "int32Value", int32Value: reader.sint32() };
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.value = { $case: "int64Value", int64Value: longToNumber(reader.sint64() as Long) };
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.value = { $case: "uint32Value", uint32Value: reader.uint32() };
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.value = { $case: "uint64Value", uint64Value: longToNumber(reader.uint64() as Long) };
          continue;
        case 17:
          if (tag !== 141) {
            break;
          }

          message.value = { $case: "floatValue", floatValue: reader.float() };
          continue;
        case 18:
          if (tag !== 145) {
            break;
          }

          message.value = { $case: "doubleValue", doubleValue: reader.double() };
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.value = { $case: "stringArray", stringArray: StringArray.decode(reader, reader.uint32()) };
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.value = { $case: "boolArray", boolArray: BoolArray.decode(reader, reader.uint32()) };
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.value = { $case: "int32Array", int32Array: Int32Array.decode(reader, reader.uint32()) };
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.value = { $case: "int64Array", int64Array: Int64Array.decode(reader, reader.uint32()) };
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.value = { $case: "uint32Array", uint32Array: Uint32Array.decode(reader, reader.uint32()) };
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.value = { $case: "uint64Array", uint64Array: Uint64Array.decode(reader, reader.uint32()) };
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.value = { $case: "floatArray", floatArray: FloatArray.decode(reader, reader.uint32()) };
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.value = { $case: "doubleArray", doubleArray: DoubleArray.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Datapoint>): Datapoint {
    return Datapoint.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Datapoint>): Datapoint {
    const message = createBaseDatapoint();
    message.timestamp = object.timestamp ?? undefined;
    if (
      object.value?.$case === "failureValue" &&
      object.value?.failureValue !== undefined &&
      object.value?.failureValue !== null
    ) {
      message.value = { $case: "failureValue", failureValue: object.value.failureValue };
    }
    if (
      object.value?.$case === "stringValue" &&
      object.value?.stringValue !== undefined &&
      object.value?.stringValue !== null
    ) {
      message.value = { $case: "stringValue", stringValue: object.value.stringValue };
    }
    if (
      object.value?.$case === "boolValue" && object.value?.boolValue !== undefined && object.value?.boolValue !== null
    ) {
      message.value = { $case: "boolValue", boolValue: object.value.boolValue };
    }
    if (
      object.value?.$case === "int32Value" &&
      object.value?.int32Value !== undefined &&
      object.value?.int32Value !== null
    ) {
      message.value = { $case: "int32Value", int32Value: object.value.int32Value };
    }
    if (
      object.value?.$case === "int64Value" &&
      object.value?.int64Value !== undefined &&
      object.value?.int64Value !== null
    ) {
      message.value = { $case: "int64Value", int64Value: object.value.int64Value };
    }
    if (
      object.value?.$case === "uint32Value" &&
      object.value?.uint32Value !== undefined &&
      object.value?.uint32Value !== null
    ) {
      message.value = { $case: "uint32Value", uint32Value: object.value.uint32Value };
    }
    if (
      object.value?.$case === "uint64Value" &&
      object.value?.uint64Value !== undefined &&
      object.value?.uint64Value !== null
    ) {
      message.value = { $case: "uint64Value", uint64Value: object.value.uint64Value };
    }
    if (
      object.value?.$case === "floatValue" &&
      object.value?.floatValue !== undefined &&
      object.value?.floatValue !== null
    ) {
      message.value = { $case: "floatValue", floatValue: object.value.floatValue };
    }
    if (
      object.value?.$case === "doubleValue" &&
      object.value?.doubleValue !== undefined &&
      object.value?.doubleValue !== null
    ) {
      message.value = { $case: "doubleValue", doubleValue: object.value.doubleValue };
    }
    if (
      object.value?.$case === "stringArray" &&
      object.value?.stringArray !== undefined &&
      object.value?.stringArray !== null
    ) {
      message.value = { $case: "stringArray", stringArray: StringArray.fromPartial(object.value.stringArray) };
    }
    if (
      object.value?.$case === "boolArray" && object.value?.boolArray !== undefined && object.value?.boolArray !== null
    ) {
      message.value = { $case: "boolArray", boolArray: BoolArray.fromPartial(object.value.boolArray) };
    }
    if (
      object.value?.$case === "int32Array" &&
      object.value?.int32Array !== undefined &&
      object.value?.int32Array !== null
    ) {
      message.value = { $case: "int32Array", int32Array: Int32Array.fromPartial(object.value.int32Array) };
    }
    if (
      object.value?.$case === "int64Array" &&
      object.value?.int64Array !== undefined &&
      object.value?.int64Array !== null
    ) {
      message.value = { $case: "int64Array", int64Array: Int64Array.fromPartial(object.value.int64Array) };
    }
    if (
      object.value?.$case === "uint32Array" &&
      object.value?.uint32Array !== undefined &&
      object.value?.uint32Array !== null
    ) {
      message.value = { $case: "uint32Array", uint32Array: Uint32Array.fromPartial(object.value.uint32Array) };
    }
    if (
      object.value?.$case === "uint64Array" &&
      object.value?.uint64Array !== undefined &&
      object.value?.uint64Array !== null
    ) {
      message.value = { $case: "uint64Array", uint64Array: Uint64Array.fromPartial(object.value.uint64Array) };
    }
    if (
      object.value?.$case === "floatArray" &&
      object.value?.floatArray !== undefined &&
      object.value?.floatArray !== null
    ) {
      message.value = { $case: "floatArray", floatArray: FloatArray.fromPartial(object.value.floatArray) };
    }
    if (
      object.value?.$case === "doubleArray" &&
      object.value?.doubleArray !== undefined &&
      object.value?.doubleArray !== null
    ) {
      message.value = { $case: "doubleArray", doubleArray: DoubleArray.fromPartial(object.value.doubleArray) };
    }
    return message;
  },
};

function createBaseMetadata(): Metadata {
  return { id: 0, entryType: 0, name: "", dataType: 0, changeType: 0, description: "" };
}

export const Metadata = {
  encode(message: Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.entryType !== 0) {
      writer.uint32(16).int32(message.entryType);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.dataType !== 0) {
      writer.uint32(40).int32(message.dataType);
    }
    if (message.changeType !== 0) {
      writer.uint32(48).int32(message.changeType);
    }
    if (message.description !== "") {
      writer.uint32(58).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.entryType = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.dataType = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.changeType = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Metadata>): Metadata {
    return Metadata.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.id = object.id ?? 0;
    message.entryType = object.entryType ?? 0;
    message.name = object.name ?? "";
    message.dataType = object.dataType ?? 0;
    message.changeType = object.changeType ?? 0;
    message.description = object.description ?? "";
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
