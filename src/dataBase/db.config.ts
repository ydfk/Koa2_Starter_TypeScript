/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2019-06-11 17:46:30
 * @LastEditors: ydfk
 * @LastEditTime: 2019-06-11 17:57:35
 */
import config from "@/config/config";
import { ConnectionOptions } from "typeorm";

export default () => {
  const dbConfig: ConnectionOptions = {
    type: "mongodb",
    host: config.MONGO_HOST,
    useNewUrlParser: true,
    port: config.MONGO_PORT,
    database: config.MONGO_DATABASE,
    entities: [__dirname + "/**/**.entity{.ts,.js}"],
    subscribers: [__dirname + "/**/**.subscriber{.ts,.js}"],
    synchronize: config.isDevelopment,
    logging: config.isDevelopment,
    maxQueryExecutionTime: 1000,
  };
  if (config.MONGO_USERNAME && config.MONGO_PASSWORD) {
    Object.assign(dbConfig, {
      username: config.MONGO_USERNAME,
      password: config.MONGO_PASSWORD,
      authMechanism: "SCRAM-SHA-1",
      authSource: "admin",
    });
  }

  return dbConfig;
};
