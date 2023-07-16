// package: sdv.databroker.v1
// file: sdv/databroker/v1/collector.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as sdv_databroker_v1_collector_pb from "../../../sdv/databroker/v1/collector_pb";
import * as sdv_databroker_v1_types_pb from "../../../sdv/databroker/v1/types_pb";

interface ICollectorService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    registerDatapoints: ICollectorService_IRegisterDatapoints;
    updateDatapoints: ICollectorService_IUpdateDatapoints;
    streamDatapoints: ICollectorService_IStreamDatapoints;
}

interface ICollectorService_IRegisterDatapoints extends grpc.MethodDefinition<sdv_databroker_v1_collector_pb.RegisterDatapointsRequest, sdv_databroker_v1_collector_pb.RegisterDatapointsReply> {
    path: "/sdv.databroker.v1.Collector/RegisterDatapoints";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sdv_databroker_v1_collector_pb.RegisterDatapointsRequest>;
    requestDeserialize: grpc.deserialize<sdv_databroker_v1_collector_pb.RegisterDatapointsRequest>;
    responseSerialize: grpc.serialize<sdv_databroker_v1_collector_pb.RegisterDatapointsReply>;
    responseDeserialize: grpc.deserialize<sdv_databroker_v1_collector_pb.RegisterDatapointsReply>;
}
interface ICollectorService_IUpdateDatapoints extends grpc.MethodDefinition<sdv_databroker_v1_collector_pb.UpdateDatapointsRequest, sdv_databroker_v1_collector_pb.UpdateDatapointsReply> {
    path: "/sdv.databroker.v1.Collector/UpdateDatapoints";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sdv_databroker_v1_collector_pb.UpdateDatapointsRequest>;
    requestDeserialize: grpc.deserialize<sdv_databroker_v1_collector_pb.UpdateDatapointsRequest>;
    responseSerialize: grpc.serialize<sdv_databroker_v1_collector_pb.UpdateDatapointsReply>;
    responseDeserialize: grpc.deserialize<sdv_databroker_v1_collector_pb.UpdateDatapointsReply>;
}
interface ICollectorService_IStreamDatapoints extends grpc.MethodDefinition<sdv_databroker_v1_collector_pb.StreamDatapointsRequest, sdv_databroker_v1_collector_pb.StreamDatapointsReply> {
    path: "/sdv.databroker.v1.Collector/StreamDatapoints";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<sdv_databroker_v1_collector_pb.StreamDatapointsRequest>;
    requestDeserialize: grpc.deserialize<sdv_databroker_v1_collector_pb.StreamDatapointsRequest>;
    responseSerialize: grpc.serialize<sdv_databroker_v1_collector_pb.StreamDatapointsReply>;
    responseDeserialize: grpc.deserialize<sdv_databroker_v1_collector_pb.StreamDatapointsReply>;
}

export const CollectorService: ICollectorService;

export interface ICollectorServer {
    registerDatapoints: grpc.handleUnaryCall<sdv_databroker_v1_collector_pb.RegisterDatapointsRequest, sdv_databroker_v1_collector_pb.RegisterDatapointsReply>;
    updateDatapoints: grpc.handleUnaryCall<sdv_databroker_v1_collector_pb.UpdateDatapointsRequest, sdv_databroker_v1_collector_pb.UpdateDatapointsReply>;
    streamDatapoints: grpc.handleBidiStreamingCall<sdv_databroker_v1_collector_pb.StreamDatapointsRequest, sdv_databroker_v1_collector_pb.StreamDatapointsReply>;
}

export interface ICollectorClient {
    registerDatapoints(request: sdv_databroker_v1_collector_pb.RegisterDatapointsRequest, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_collector_pb.RegisterDatapointsReply) => void): grpc.ClientUnaryCall;
    registerDatapoints(request: sdv_databroker_v1_collector_pb.RegisterDatapointsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_collector_pb.RegisterDatapointsReply) => void): grpc.ClientUnaryCall;
    registerDatapoints(request: sdv_databroker_v1_collector_pb.RegisterDatapointsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_collector_pb.RegisterDatapointsReply) => void): grpc.ClientUnaryCall;
    updateDatapoints(request: sdv_databroker_v1_collector_pb.UpdateDatapointsRequest, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_collector_pb.UpdateDatapointsReply) => void): grpc.ClientUnaryCall;
    updateDatapoints(request: sdv_databroker_v1_collector_pb.UpdateDatapointsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_collector_pb.UpdateDatapointsReply) => void): grpc.ClientUnaryCall;
    updateDatapoints(request: sdv_databroker_v1_collector_pb.UpdateDatapointsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_collector_pb.UpdateDatapointsReply) => void): grpc.ClientUnaryCall;
    streamDatapoints(): grpc.ClientDuplexStream<sdv_databroker_v1_collector_pb.StreamDatapointsRequest, sdv_databroker_v1_collector_pb.StreamDatapointsReply>;
    streamDatapoints(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sdv_databroker_v1_collector_pb.StreamDatapointsRequest, sdv_databroker_v1_collector_pb.StreamDatapointsReply>;
    streamDatapoints(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sdv_databroker_v1_collector_pb.StreamDatapointsRequest, sdv_databroker_v1_collector_pb.StreamDatapointsReply>;
}

export class CollectorClient extends grpc.Client implements ICollectorClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public registerDatapoints(request: sdv_databroker_v1_collector_pb.RegisterDatapointsRequest, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_collector_pb.RegisterDatapointsReply) => void): grpc.ClientUnaryCall;
    public registerDatapoints(request: sdv_databroker_v1_collector_pb.RegisterDatapointsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_collector_pb.RegisterDatapointsReply) => void): grpc.ClientUnaryCall;
    public registerDatapoints(request: sdv_databroker_v1_collector_pb.RegisterDatapointsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_collector_pb.RegisterDatapointsReply) => void): grpc.ClientUnaryCall;
    public updateDatapoints(request: sdv_databroker_v1_collector_pb.UpdateDatapointsRequest, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_collector_pb.UpdateDatapointsReply) => void): grpc.ClientUnaryCall;
    public updateDatapoints(request: sdv_databroker_v1_collector_pb.UpdateDatapointsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_collector_pb.UpdateDatapointsReply) => void): grpc.ClientUnaryCall;
    public updateDatapoints(request: sdv_databroker_v1_collector_pb.UpdateDatapointsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_collector_pb.UpdateDatapointsReply) => void): grpc.ClientUnaryCall;
    public streamDatapoints(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sdv_databroker_v1_collector_pb.StreamDatapointsRequest, sdv_databroker_v1_collector_pb.StreamDatapointsReply>;
    public streamDatapoints(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<sdv_databroker_v1_collector_pb.StreamDatapointsRequest, sdv_databroker_v1_collector_pb.StreamDatapointsReply>;
}
