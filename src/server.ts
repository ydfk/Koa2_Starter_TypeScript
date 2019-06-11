import "reflect-metadata";
import Koa from "koa";
import config from "@/config/config";
import dbConfig from "@/dataBase/db.config";
import router from "./router";
import { createConnection } from "typeorm";

createConnection(dbConfig())
.then(() => {
  const app = new Koa();

  app.use(router.routes());

  app.listen(config.port, () => {
    const url = `http://localhost:${config.port}/`;
    console.log(`✅ The server is running at ${url}`);
  });
})
.catch(error => console.log(error));
