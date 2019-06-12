<!--
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2019-06-11 12:36:35
 * @LastEditors: ydfk
 * @LastEditTime: 2019-06-12 11:10:45
 -->
# Koa2_Starter_TypeScript
这是一个快速的koa2开发框架

# 使用到的技术
* koa2
* typescript
* typedi
* typeOrm
* routing-controllers

# 安装依赖
`yarn install`

# 开发/调试

`yarn dev` 

`yarn dev:debug`

# nodemon

`yarn serve`

`yarn debug`

# 打包

`yarn build`

配置文件需要在根目录增加 `.development.env`
参考

``` config
NODE_ENV="development"
PORT=5000

MONGO_HOST="127.0.0.1"
MONGO_PORT=27017
MONGO_DATABASE="test"
```