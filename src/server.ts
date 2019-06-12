/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2019-06-11 12:36:35
 * @LastEditors: ydfk
 * @LastEditTime: 2019-06-12 11:30:00
 */
// @ts-ignore
import tSModuleAlias from "@momothepug/tsmodule-alias";
tSModuleAlias.use({
  "@/*": __dirname,
});
import "reflect-metadata";
import configType from "@/config/config";
import dbConfig from "@/dataBase/db.config";
import { createKoaServer, useContainer as routingUseContainer } from "routing-controllers";
import { createConnection, useContainer } from "typeorm";
import { Container } from "typedi";

useContainer(Container);

createConnection(dbConfig())
  .then(() => {
    routingUseContainer(Container);

    const config = Container.get(configType);

    const app = createKoaServer({
      development: config.isDevelopment,
      routePrefix: "/",
      cors: true,
      controllers: [__dirname + "/controller/*.controller.{ts,js}"],
      middlewares: [__dirname + "/middleware/*.middleware.{ts,js}"],
      validation: { validationError: { target: false } },
    });

    app.listen(config.port, () => {
      const url = `http://localhost:${config.port}/`;
      console.log(`✅ The server is running at ${url}`);
    });
  })
  .catch(error => console.log(error));
