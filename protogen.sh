#!/usr/bin/env bash 

npm install protobufjs long nice-grpc isomorphic-fetch
npm i --save-dev @types/google-protobuf ts-proto grpc-tools

TS_OUT_DIR="./src/proto_gen"
IN_DIR="sdv/databroker/v1"
PROTOC="protoc"

mkdir $TS_OUT_DIR

$PROTOC --plugin=node_modules/ts-proto/protoc-gen-ts_proto \
        --ts_proto_opt=env=browser,outputServices=nice-grpc,outputServices=generic-definitions,outputJsonMethods=false,useExactTypes=false,useContext=false,oneof=unions  \
        --ts_proto_out=$TS_OUT_DIR \
        $IN_DIR/broker.proto -I./kuksa.val/kuksa_databroker/proto/
