// package: sdv.databroker.v1
// file: sdv/databroker/v1/types.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class StringArray extends jspb.Message { 
    clearValuesList(): void;
    getValuesList(): Array<string>;
    setValuesList(value: Array<string>): StringArray;
    addValues(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StringArray.AsObject;
    static toObject(includeInstance: boolean, msg: StringArray): StringArray.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StringArray, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StringArray;
    static deserializeBinaryFromReader(message: StringArray, reader: jspb.BinaryReader): StringArray;
}

export namespace StringArray {
    export type AsObject = {
        valuesList: Array<string>,
    }
}

export class BoolArray extends jspb.Message { 
    clearValuesList(): void;
    getValuesList(): Array<boolean>;
    setValuesList(value: Array<boolean>): BoolArray;
    addValues(value: boolean, index?: number): boolean;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BoolArray.AsObject;
    static toObject(includeInstance: boolean, msg: BoolArray): BoolArray.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BoolArray, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BoolArray;
    static deserializeBinaryFromReader(message: BoolArray, reader: jspb.BinaryReader): BoolArray;
}

export namespace BoolArray {
    export type AsObject = {
        valuesList: Array<boolean>,
    }
}

export class Int32Array extends jspb.Message { 
    clearValuesList(): void;
    getValuesList(): Array<number>;
    setValuesList(value: Array<number>): Int32Array;
    addValues(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Int32Array.AsObject;
    static toObject(includeInstance: boolean, msg: Int32Array): Int32Array.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Int32Array, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Int32Array;
    static deserializeBinaryFromReader(message: Int32Array, reader: jspb.BinaryReader): Int32Array;
}

export namespace Int32Array {
    export type AsObject = {
        valuesList: Array<number>,
    }
}

export class Int64Array extends jspb.Message { 
    clearValuesList(): void;
    getValuesList(): Array<number>;
    setValuesList(value: Array<number>): Int64Array;
    addValues(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Int64Array.AsObject;
    static toObject(includeInstance: boolean, msg: Int64Array): Int64Array.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Int64Array, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Int64Array;
    static deserializeBinaryFromReader(message: Int64Array, reader: jspb.BinaryReader): Int64Array;
}

export namespace Int64Array {
    export type AsObject = {
        valuesList: Array<number>,
    }
}

export class Uint32Array extends jspb.Message { 
    clearValuesList(): void;
    getValuesList(): Array<number>;
    setValuesList(value: Array<number>): Uint32Array;
    addValues(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Uint32Array.AsObject;
    static toObject(includeInstance: boolean, msg: Uint32Array): Uint32Array.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Uint32Array, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Uint32Array;
    static deserializeBinaryFromReader(message: Uint32Array, reader: jspb.BinaryReader): Uint32Array;
}

export namespace Uint32Array {
    export type AsObject = {
        valuesList: Array<number>,
    }
}

export class Uint64Array extends jspb.Message { 
    clearValuesList(): void;
    getValuesList(): Array<number>;
    setValuesList(value: Array<number>): Uint64Array;
    addValues(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Uint64Array.AsObject;
    static toObject(includeInstance: boolean, msg: Uint64Array): Uint64Array.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Uint64Array, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Uint64Array;
    static deserializeBinaryFromReader(message: Uint64Array, reader: jspb.BinaryReader): Uint64Array;
}

export namespace Uint64Array {
    export type AsObject = {
        valuesList: Array<number>,
    }
}

export class FloatArray extends jspb.Message { 
    clearValuesList(): void;
    getValuesList(): Array<number>;
    setValuesList(value: Array<number>): FloatArray;
    addValues(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FloatArray.AsObject;
    static toObject(includeInstance: boolean, msg: FloatArray): FloatArray.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FloatArray, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FloatArray;
    static deserializeBinaryFromReader(message: FloatArray, reader: jspb.BinaryReader): FloatArray;
}

export namespace FloatArray {
    export type AsObject = {
        valuesList: Array<number>,
    }
}

export class DoubleArray extends jspb.Message { 
    clearValuesList(): void;
    getValuesList(): Array<number>;
    setValuesList(value: Array<number>): DoubleArray;
    addValues(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DoubleArray.AsObject;
    static toObject(includeInstance: boolean, msg: DoubleArray): DoubleArray.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DoubleArray, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DoubleArray;
    static deserializeBinaryFromReader(message: DoubleArray, reader: jspb.BinaryReader): DoubleArray;
}

export namespace DoubleArray {
    export type AsObject = {
        valuesList: Array<number>,
    }
}

export class Datapoint extends jspb.Message { 

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Datapoint;

    hasFailureValue(): boolean;
    clearFailureValue(): void;
    getFailureValue(): Datapoint.Failure;
    setFailureValue(value: Datapoint.Failure): Datapoint;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): string;
    setStringValue(value: string): Datapoint;

    hasBoolValue(): boolean;
    clearBoolValue(): void;
    getBoolValue(): boolean;
    setBoolValue(value: boolean): Datapoint;

    hasInt32Value(): boolean;
    clearInt32Value(): void;
    getInt32Value(): number;
    setInt32Value(value: number): Datapoint;

    hasInt64Value(): boolean;
    clearInt64Value(): void;
    getInt64Value(): number;
    setInt64Value(value: number): Datapoint;

    hasUint32Value(): boolean;
    clearUint32Value(): void;
    getUint32Value(): number;
    setUint32Value(value: number): Datapoint;

    hasUint64Value(): boolean;
    clearUint64Value(): void;
    getUint64Value(): number;
    setUint64Value(value: number): Datapoint;

    hasFloatValue(): boolean;
    clearFloatValue(): void;
    getFloatValue(): number;
    setFloatValue(value: number): Datapoint;

    hasDoubleValue(): boolean;
    clearDoubleValue(): void;
    getDoubleValue(): number;
    setDoubleValue(value: number): Datapoint;

    hasStringArray(): boolean;
    clearStringArray(): void;
    getStringArray(): StringArray | undefined;
    setStringArray(value?: StringArray): Datapoint;

    hasBoolArray(): boolean;
    clearBoolArray(): void;
    getBoolArray(): BoolArray | undefined;
    setBoolArray(value?: BoolArray): Datapoint;

    hasInt32Array(): boolean;
    clearInt32Array(): void;
    getInt32Array(): Int32Array | undefined;
    setInt32Array(value?: Int32Array): Datapoint;

    hasInt64Array(): boolean;
    clearInt64Array(): void;
    getInt64Array(): Int64Array | undefined;
    setInt64Array(value?: Int64Array): Datapoint;

    hasUint32Array(): boolean;
    clearUint32Array(): void;
    getUint32Array(): Uint32Array | undefined;
    setUint32Array(value?: Uint32Array): Datapoint;

    hasUint64Array(): boolean;
    clearUint64Array(): void;
    getUint64Array(): Uint64Array | undefined;
    setUint64Array(value?: Uint64Array): Datapoint;

    hasFloatArray(): boolean;
    clearFloatArray(): void;
    getFloatArray(): FloatArray | undefined;
    setFloatArray(value?: FloatArray): Datapoint;

    hasDoubleArray(): boolean;
    clearDoubleArray(): void;
    getDoubleArray(): DoubleArray | undefined;
    setDoubleArray(value?: DoubleArray): Datapoint;

    getValueCase(): Datapoint.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Datapoint.AsObject;
    static toObject(includeInstance: boolean, msg: Datapoint): Datapoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Datapoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Datapoint;
    static deserializeBinaryFromReader(message: Datapoint, reader: jspb.BinaryReader): Datapoint;
}

export namespace Datapoint {
    export type AsObject = {
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        failureValue: Datapoint.Failure,
        stringValue: string,
        boolValue: boolean,
        int32Value: number,
        int64Value: number,
        uint32Value: number,
        uint64Value: number,
        floatValue: number,
        doubleValue: number,
        stringArray?: StringArray.AsObject,
        boolArray?: BoolArray.AsObject,
        int32Array?: Int32Array.AsObject,
        int64Array?: Int64Array.AsObject,
        uint32Array?: Uint32Array.AsObject,
        uint64Array?: Uint64Array.AsObject,
        floatArray?: FloatArray.AsObject,
        doubleArray?: DoubleArray.AsObject,
    }

    export enum Failure {
    INVALID_VALUE = 0,
    NOT_AVAILABLE = 1,
    UNKNOWN_DATAPOINT = 2,
    ACCESS_DENIED = 3,
    INTERNAL_ERROR = 4,
    }


    export enum ValueCase {
        VALUE_NOT_SET = 0,
        FAILURE_VALUE = 10,
        STRING_VALUE = 11,
        BOOL_VALUE = 12,
        INT32_VALUE = 13,
        INT64_VALUE = 14,
        UINT32_VALUE = 15,
        UINT64_VALUE = 16,
        FLOAT_VALUE = 17,
        DOUBLE_VALUE = 18,
        STRING_ARRAY = 21,
        BOOL_ARRAY = 22,
        INT32_ARRAY = 23,
        INT64_ARRAY = 24,
        UINT32_ARRAY = 25,
        UINT64_ARRAY = 26,
        FLOAT_ARRAY = 27,
        DOUBLE_ARRAY = 28,
    }

}

export class Metadata extends jspb.Message { 
    getId(): number;
    setId(value: number): Metadata;
    getEntryType(): EntryType;
    setEntryType(value: EntryType): Metadata;
    getName(): string;
    setName(value: string): Metadata;
    getDataType(): DataType;
    setDataType(value: DataType): Metadata;
    getChangeType(): ChangeType;
    setChangeType(value: ChangeType): Metadata;
    getDescription(): string;
    setDescription(value: string): Metadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Metadata.AsObject;
    static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Metadata;
    static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
    export type AsObject = {
        id: number,
        entryType: EntryType,
        name: string,
        dataType: DataType,
        changeType: ChangeType,
        description: string,
    }
}

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
}

export enum DatapointError {
    UNKNOWN_DATAPOINT = 0,
    INVALID_TYPE = 1,
    ACCESS_DENIED = 2,
    INTERNAL_ERROR = 3,
    OUT_OF_BOUNDS = 4,
}

export enum EntryType {
    ENTRY_TYPE_UNSPECIFIED = 0,
    ENTRY_TYPE_SENSOR = 1,
    ENTRY_TYPE_ACTUATOR = 2,
    ENTRY_TYPE_ATTRIBUTE = 3,
}

export enum ChangeType {
    STATIC = 0,
    ON_CHANGE = 1,
    CONTINUOUS = 2,
}
