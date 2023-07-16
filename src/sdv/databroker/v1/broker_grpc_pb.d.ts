// package: sdv.databroker.v1
// file: sdv/databroker/v1/broker.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as sdv_databroker_v1_broker_pb from "../../../sdv/databroker/v1/broker_pb";
import * as sdv_databroker_v1_types_pb from "../../../sdv/databroker/v1/types_pb";

interface IBrokerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getDatapoints: IBrokerService_IGetDatapoints;
    setDatapoints: IBrokerService_ISetDatapoints;
    subscribe: IBrokerService_ISubscribe;
    getMetadata: IBrokerService_IGetMetadata;
}

interface IBrokerService_IGetDatapoints extends grpc.MethodDefinition<sdv_databroker_v1_broker_pb.GetDatapointsRequest, sdv_databroker_v1_broker_pb.GetDatapointsReply> {
    path: "/sdv.databroker.v1.Broker/GetDatapoints";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sdv_databroker_v1_broker_pb.GetDatapointsRequest>;
    requestDeserialize: grpc.deserialize<sdv_databroker_v1_broker_pb.GetDatapointsRequest>;
    responseSerialize: grpc.serialize<sdv_databroker_v1_broker_pb.GetDatapointsReply>;
    responseDeserialize: grpc.deserialize<sdv_databroker_v1_broker_pb.GetDatapointsReply>;
}
interface IBrokerService_ISetDatapoints extends grpc.MethodDefinition<sdv_databroker_v1_broker_pb.SetDatapointsRequest, sdv_databroker_v1_broker_pb.SetDatapointsReply> {
    path: "/sdv.databroker.v1.Broker/SetDatapoints";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sdv_databroker_v1_broker_pb.SetDatapointsRequest>;
    requestDeserialize: grpc.deserialize<sdv_databroker_v1_broker_pb.SetDatapointsRequest>;
    responseSerialize: grpc.serialize<sdv_databroker_v1_broker_pb.SetDatapointsReply>;
    responseDeserialize: grpc.deserialize<sdv_databroker_v1_broker_pb.SetDatapointsReply>;
}
interface IBrokerService_ISubscribe extends grpc.MethodDefinition<sdv_databroker_v1_broker_pb.SubscribeRequest, sdv_databroker_v1_broker_pb.SubscribeReply> {
    path: "/sdv.databroker.v1.Broker/Subscribe";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<sdv_databroker_v1_broker_pb.SubscribeRequest>;
    requestDeserialize: grpc.deserialize<sdv_databroker_v1_broker_pb.SubscribeRequest>;
    responseSerialize: grpc.serialize<sdv_databroker_v1_broker_pb.SubscribeReply>;
    responseDeserialize: grpc.deserialize<sdv_databroker_v1_broker_pb.SubscribeReply>;
}
interface IBrokerService_IGetMetadata extends grpc.MethodDefinition<sdv_databroker_v1_broker_pb.GetMetadataRequest, sdv_databroker_v1_broker_pb.GetMetadataReply> {
    path: "/sdv.databroker.v1.Broker/GetMetadata";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sdv_databroker_v1_broker_pb.GetMetadataRequest>;
    requestDeserialize: grpc.deserialize<sdv_databroker_v1_broker_pb.GetMetadataRequest>;
    responseSerialize: grpc.serialize<sdv_databroker_v1_broker_pb.GetMetadataReply>;
    responseDeserialize: grpc.deserialize<sdv_databroker_v1_broker_pb.GetMetadataReply>;
}

export const BrokerService: IBrokerService;

export interface IBrokerServer {
    getDatapoints: grpc.handleUnaryCall<sdv_databroker_v1_broker_pb.GetDatapointsRequest, sdv_databroker_v1_broker_pb.GetDatapointsReply>;
    setDatapoints: grpc.handleUnaryCall<sdv_databroker_v1_broker_pb.SetDatapointsRequest, sdv_databroker_v1_broker_pb.SetDatapointsReply>;
    subscribe: grpc.handleServerStreamingCall<sdv_databroker_v1_broker_pb.SubscribeRequest, sdv_databroker_v1_broker_pb.SubscribeReply>;
    getMetadata: grpc.handleUnaryCall<sdv_databroker_v1_broker_pb.GetMetadataRequest, sdv_databroker_v1_broker_pb.GetMetadataReply>;
}

export interface IBrokerClient {
    getDatapoints(request: sdv_databroker_v1_broker_pb.GetDatapointsRequest, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_broker_pb.GetDatapointsReply) => void): grpc.ClientUnaryCall;
    getDatapoints(request: sdv_databroker_v1_broker_pb.GetDatapointsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_broker_pb.GetDatapointsReply) => void): grpc.ClientUnaryCall;
    getDatapoints(request: sdv_databroker_v1_broker_pb.GetDatapointsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_broker_pb.GetDatapointsReply) => void): grpc.ClientUnaryCall;
    setDatapoints(request: sdv_databroker_v1_broker_pb.SetDatapointsRequest, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_broker_pb.SetDatapointsReply) => void): grpc.ClientUnaryCall;
    setDatapoints(request: sdv_databroker_v1_broker_pb.SetDatapointsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_broker_pb.SetDatapointsReply) => void): grpc.ClientUnaryCall;
    setDatapoints(request: sdv_databroker_v1_broker_pb.SetDatapointsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_broker_pb.SetDatapointsReply) => void): grpc.ClientUnaryCall;
    subscribe(request: sdv_databroker_v1_broker_pb.SubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sdv_databroker_v1_broker_pb.SubscribeReply>;
    subscribe(request: sdv_databroker_v1_broker_pb.SubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sdv_databroker_v1_broker_pb.SubscribeReply>;
    getMetadata(request: sdv_databroker_v1_broker_pb.GetMetadataRequest, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_broker_pb.GetMetadataReply) => void): grpc.ClientUnaryCall;
    getMetadata(request: sdv_databroker_v1_broker_pb.GetMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_broker_pb.GetMetadataReply) => void): grpc.ClientUnaryCall;
    getMetadata(request: sdv_databroker_v1_broker_pb.GetMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_broker_pb.GetMetadataReply) => void): grpc.ClientUnaryCall;
}

export class BrokerClient extends grpc.Client implements IBrokerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getDatapoints(request: sdv_databroker_v1_broker_pb.GetDatapointsRequest, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_broker_pb.GetDatapointsReply) => void): grpc.ClientUnaryCall;
    public getDatapoints(request: sdv_databroker_v1_broker_pb.GetDatapointsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_broker_pb.GetDatapointsReply) => void): grpc.ClientUnaryCall;
    public getDatapoints(request: sdv_databroker_v1_broker_pb.GetDatapointsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_broker_pb.GetDatapointsReply) => void): grpc.ClientUnaryCall;
    public setDatapoints(request: sdv_databroker_v1_broker_pb.SetDatapointsRequest, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_broker_pb.SetDatapointsReply) => void): grpc.ClientUnaryCall;
    public setDatapoints(request: sdv_databroker_v1_broker_pb.SetDatapointsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_broker_pb.SetDatapointsReply) => void): grpc.ClientUnaryCall;
    public setDatapoints(request: sdv_databroker_v1_broker_pb.SetDatapointsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_broker_pb.SetDatapointsReply) => void): grpc.ClientUnaryCall;
    public subscribe(request: sdv_databroker_v1_broker_pb.SubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sdv_databroker_v1_broker_pb.SubscribeReply>;
    public subscribe(request: sdv_databroker_v1_broker_pb.SubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sdv_databroker_v1_broker_pb.SubscribeReply>;
    public getMetadata(request: sdv_databroker_v1_broker_pb.GetMetadataRequest, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_broker_pb.GetMetadataReply) => void): grpc.ClientUnaryCall;
    public getMetadata(request: sdv_databroker_v1_broker_pb.GetMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_broker_pb.GetMetadataReply) => void): grpc.ClientUnaryCall;
    public getMetadata(request: sdv_databroker_v1_broker_pb.GetMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sdv_databroker_v1_broker_pb.GetMetadataReply) => void): grpc.ClientUnaryCall;
}
