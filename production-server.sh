#!/usr/bin/env bash

echo "开始编译前端代码"
npm run client-dep
echo "开始编译服务端代码"
npm run build-app
npm run build-server
echo "开始运行程序"
npm run serve
