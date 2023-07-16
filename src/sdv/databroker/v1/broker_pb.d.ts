// package: sdv.databroker.v1
// file: sdv/databroker/v1/broker.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as sdv_databroker_v1_types_pb from "../../../sdv/databroker/v1/types_pb";

export class GetDatapointsRequest extends jspb.Message { 
    clearDatapointsList(): void;
    getDatapointsList(): Array<string>;
    setDatapointsList(value: Array<string>): GetDatapointsRequest;
    addDatapoints(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDatapointsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDatapointsRequest): GetDatapointsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDatapointsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDatapointsRequest;
    static deserializeBinaryFromReader(message: GetDatapointsRequest, reader: jspb.BinaryReader): GetDatapointsRequest;
}

export namespace GetDatapointsRequest {
    export type AsObject = {
        datapointsList: Array<string>,
    }
}

export class GetDatapointsReply extends jspb.Message { 

    getDatapointsMap(): jspb.Map<string, sdv_databroker_v1_types_pb.Datapoint>;
    clearDatapointsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDatapointsReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetDatapointsReply): GetDatapointsReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDatapointsReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDatapointsReply;
    static deserializeBinaryFromReader(message: GetDatapointsReply, reader: jspb.BinaryReader): GetDatapointsReply;
}

export namespace GetDatapointsReply {
    export type AsObject = {

        datapointsMap: Array<[string, sdv_databroker_v1_types_pb.Datapoint.AsObject]>,
    }
}

export class SetDatapointsRequest extends jspb.Message { 

    getDatapointsMap(): jspb.Map<string, sdv_databroker_v1_types_pb.Datapoint>;
    clearDatapointsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetDatapointsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetDatapointsRequest): SetDatapointsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetDatapointsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetDatapointsRequest;
    static deserializeBinaryFromReader(message: SetDatapointsRequest, reader: jspb.BinaryReader): SetDatapointsRequest;
}

export namespace SetDatapointsRequest {
    export type AsObject = {

        datapointsMap: Array<[string, sdv_databroker_v1_types_pb.Datapoint.AsObject]>,
    }
}

export class SetDatapointsReply extends jspb.Message { 

    getErrorsMap(): jspb.Map<string, sdv_databroker_v1_types_pb.DatapointError>;
    clearErrorsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetDatapointsReply.AsObject;
    static toObject(includeInstance: boolean, msg: SetDatapointsReply): SetDatapointsReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetDatapointsReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetDatapointsReply;
    static deserializeBinaryFromReader(message: SetDatapointsReply, reader: jspb.BinaryReader): SetDatapointsReply;
}

export namespace SetDatapointsReply {
    export type AsObject = {

        errorsMap: Array<[string, sdv_databroker_v1_types_pb.DatapointError]>,
    }
}

export class SubscribeRequest extends jspb.Message { 
    getQuery(): string;
    setQuery(value: string): SubscribeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeRequest): SubscribeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeRequest;
    static deserializeBinaryFromReader(message: SubscribeRequest, reader: jspb.BinaryReader): SubscribeRequest;
}

export namespace SubscribeRequest {
    export type AsObject = {
        query: string,
    }
}

export class SubscribeReply extends jspb.Message { 

    getFieldsMap(): jspb.Map<string, sdv_databroker_v1_types_pb.Datapoint>;
    clearFieldsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeReply.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeReply): SubscribeReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeReply;
    static deserializeBinaryFromReader(message: SubscribeReply, reader: jspb.BinaryReader): SubscribeReply;
}

export namespace SubscribeReply {
    export type AsObject = {

        fieldsMap: Array<[string, sdv_databroker_v1_types_pb.Datapoint.AsObject]>,
    }
}

export class GetMetadataRequest extends jspb.Message { 
    clearNamesList(): void;
    getNamesList(): Array<string>;
    setNamesList(value: Array<string>): GetMetadataRequest;
    addNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMetadataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMetadataRequest): GetMetadataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMetadataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMetadataRequest;
    static deserializeBinaryFromReader(message: GetMetadataRequest, reader: jspb.BinaryReader): GetMetadataRequest;
}

export namespace GetMetadataRequest {
    export type AsObject = {
        namesList: Array<string>,
    }
}

export class GetMetadataReply extends jspb.Message { 
    clearListList(): void;
    getListList(): Array<sdv_databroker_v1_types_pb.Metadata>;
    setListList(value: Array<sdv_databroker_v1_types_pb.Metadata>): GetMetadataReply;
    addList(value?: sdv_databroker_v1_types_pb.Metadata, index?: number): sdv_databroker_v1_types_pb.Metadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMetadataReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetMetadataReply): GetMetadataReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMetadataReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMetadataReply;
    static deserializeBinaryFromReader(message: GetMetadataReply, reader: jspb.BinaryReader): GetMetadataReply;
}

export namespace GetMetadataReply {
    export type AsObject = {
        listList: Array<sdv_databroker_v1_types_pb.Metadata.AsObject>,
    }
}
