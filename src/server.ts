import Koa from "koa";
import opn from "open";
import config from "./config";
import router from "./router";

const app = new Koa();

app.use(router.routes());

app.listen(config.port, () => {
  const url = `http://localhost:${config.port}/`;
  console.log(`✅ The server is running at ${url}`);
  //// opn(url);
});
