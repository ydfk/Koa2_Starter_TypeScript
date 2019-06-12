/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2019-06-11 17:46:30
 * @LastEditors: ydfk
 * @LastEditTime: 2019-06-12 11:47:20
 */
import configType from "@/config/config";
import { ConnectionOptions } from "typeorm";
import { Container } from "typedi";
import path from "path";

const config = Container.get(configType);

export default () => {
  const rootPath = path.resolve(__dirname, "..");
  const dbConfig: ConnectionOptions = {
    type: "mongodb",
    host: config.MONGO_HOST,
    useNewUrlParser: true,
    port: config.MONGO_PORT,
    database: config.MONGO_DATABASE,
    entities: [rootPath + "/**/**.entity{.ts,.js}"],
    subscribers: [rootPath + "/**/**.subscriber{.ts,.js}"],
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
