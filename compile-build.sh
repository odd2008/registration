echo "开始编译前端代码"
npm run client-dep
echo "开始编译服务端代码"
npm run build-app
npm run build-server

now="$(date +'%Y-%m-%d_%H.%M.%S')"
echo "编译完成: V$now"
