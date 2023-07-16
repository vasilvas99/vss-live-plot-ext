#!/usr/bin/env bash

npm install grpc-tools @grpc/grpc-js ts-protoc-gen grpc grpc_tools_node_protoc_ts google-protobuf
ln -s kuksa.val/kuksa_databroker/proto/sdv
OUT_DIR="./out"
TS_OUT_DIR="./src"
IN_DIR="sdv/databroker/v1"
PROTOC="$(npm bin)/grpc_tools_node_protoc"
PROTOC_GEN_TS="$(npm bin)/protoc-gen-ts"

mkdir -p "$OUT_DIR"

$PROTOC \
    -I=./ \
    --plugin=protoc-gen-ts=$PROTOC_GEN_TS \
    --js_out=import_style=commonjs:$OUT_DIR \
    --grpc_out=:$OUT_DIR \
    --ts_out=service=grpc-node:$TS_OUT_DIR \
    "$IN_DIR"/broker.proto

$PROTOC \
    -I=./ \
    --plugin=protoc-gen-ts=$PROTOC_GEN_TS \
    --js_out=import_style=commonjs:$OUT_DIR \
    --grpc_out=:$OUT_DIR \
    --ts_out=service=grpc-node:$TS_OUT_DIR \
    "$IN_DIR"/types.proto

$PROTOC \
    -I=./ \
    --plugin=protoc-gen-ts=$PROTOC_GEN_TS \
    --js_out=import_style=commonjs:$OUT_DIR \
    --grpc_out=:$OUT_DIR \
    --ts_out=service=grpc-node:$TS_OUT_DIR \
    "$IN_DIR"/collector.proto

sed -i "" -e \
    "s/require('grpc')/require('@grpc\/grpc-js')/g" \
    "$OUT_DIR/$IN_DIR/"*

sed -i "" -e \
    "s/from \"grpc\"/from \"@grpc\/grpc-js\"/g" \
    "$TS_OUT_DIR/$IN_DIR/"*