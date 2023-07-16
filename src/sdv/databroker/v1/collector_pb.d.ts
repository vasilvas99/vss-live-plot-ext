// package: sdv.databroker.v1
// file: sdv/databroker/v1/collector.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as sdv_databroker_v1_types_pb from "../../../sdv/databroker/v1/types_pb";

export class UpdateDatapointsRequest extends jspb.Message { 

    getDatapointsMap(): jspb.Map<number, sdv_databroker_v1_types_pb.Datapoint>;
    clearDatapointsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateDatapointsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateDatapointsRequest): UpdateDatapointsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateDatapointsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateDatapointsRequest;
    static deserializeBinaryFromReader(message: UpdateDatapointsRequest, reader: jspb.BinaryReader): UpdateDatapointsRequest;
}

export namespace UpdateDatapointsRequest {
    export type AsObject = {

        datapointsMap: Array<[number, sdv_databroker_v1_types_pb.Datapoint.AsObject]>,
    }
}

export class UpdateDatapointsReply extends jspb.Message { 

    getErrorsMap(): jspb.Map<number, sdv_databroker_v1_types_pb.DatapointError>;
    clearErrorsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateDatapointsReply.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateDatapointsReply): UpdateDatapointsReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateDatapointsReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateDatapointsReply;
    static deserializeBinaryFromReader(message: UpdateDatapointsReply, reader: jspb.BinaryReader): UpdateDatapointsReply;
}

export namespace UpdateDatapointsReply {
    export type AsObject = {

        errorsMap: Array<[number, sdv_databroker_v1_types_pb.DatapointError]>,
    }
}

export class StreamDatapointsRequest extends jspb.Message { 

    getDatapointsMap(): jspb.Map<number, sdv_databroker_v1_types_pb.Datapoint>;
    clearDatapointsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamDatapointsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamDatapointsRequest): StreamDatapointsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamDatapointsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamDatapointsRequest;
    static deserializeBinaryFromReader(message: StreamDatapointsRequest, reader: jspb.BinaryReader): StreamDatapointsRequest;
}

export namespace StreamDatapointsRequest {
    export type AsObject = {

        datapointsMap: Array<[number, sdv_databroker_v1_types_pb.Datapoint.AsObject]>,
    }
}

export class StreamDatapointsReply extends jspb.Message { 

    getErrorsMap(): jspb.Map<number, sdv_databroker_v1_types_pb.DatapointError>;
    clearErrorsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamDatapointsReply.AsObject;
    static toObject(includeInstance: boolean, msg: StreamDatapointsReply): StreamDatapointsReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamDatapointsReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamDatapointsReply;
    static deserializeBinaryFromReader(message: StreamDatapointsReply, reader: jspb.BinaryReader): StreamDatapointsReply;
}

export namespace StreamDatapointsReply {
    export type AsObject = {

        errorsMap: Array<[number, sdv_databroker_v1_types_pb.DatapointError]>,
    }
}

export class RegisterDatapointsRequest extends jspb.Message { 
    clearListList(): void;
    getListList(): Array<RegistrationMetadata>;
    setListList(value: Array<RegistrationMetadata>): RegisterDatapointsRequest;
    addList(value?: RegistrationMetadata, index?: number): RegistrationMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterDatapointsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterDatapointsRequest): RegisterDatapointsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterDatapointsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterDatapointsRequest;
    static deserializeBinaryFromReader(message: RegisterDatapointsRequest, reader: jspb.BinaryReader): RegisterDatapointsRequest;
}

export namespace RegisterDatapointsRequest {
    export type AsObject = {
        listList: Array<RegistrationMetadata.AsObject>,
    }
}

export class RegistrationMetadata extends jspb.Message { 
    getName(): string;
    setName(value: string): RegistrationMetadata;
    getDataType(): sdv_databroker_v1_types_pb.DataType;
    setDataType(value: sdv_databroker_v1_types_pb.DataType): RegistrationMetadata;
    getDescription(): string;
    setDescription(value: string): RegistrationMetadata;
    getChangeType(): sdv_databroker_v1_types_pb.ChangeType;
    setChangeType(value: sdv_databroker_v1_types_pb.ChangeType): RegistrationMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegistrationMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: RegistrationMetadata): RegistrationMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegistrationMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegistrationMetadata;
    static deserializeBinaryFromReader(message: RegistrationMetadata, reader: jspb.BinaryReader): RegistrationMetadata;
}

export namespace RegistrationMetadata {
    export type AsObject = {
        name: string,
        dataType: sdv_databroker_v1_types_pb.DataType,
        description: string,
        changeType: sdv_databroker_v1_types_pb.ChangeType,
    }
}

export class RegisterDatapointsReply extends jspb.Message { 

    getResultsMap(): jspb.Map<string, number>;
    clearResultsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterDatapointsReply.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterDatapointsReply): RegisterDatapointsReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterDatapointsReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterDatapointsReply;
    static deserializeBinaryFromReader(message: RegisterDatapointsReply, reader: jspb.BinaryReader): RegisterDatapointsReply;
}

export namespace RegisterDatapointsReply {
    export type AsObject = {

        resultsMap: Array<[string, number]>,
    }
}
