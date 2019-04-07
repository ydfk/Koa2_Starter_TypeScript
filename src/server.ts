import Koa from "koa";
import Router from "koa-router";
import opn from "opn";
import config from "./config/config";

const app = new Koa();
const router = new Router();

router.get("/", async ctx => {
  ctx.body = "Hello World!";
});

app.use(router.routes());

app.listen(config.port, () => {
  const url = `http://localhost:${config.port}/`;
  console.log(`✅ The server is running at ${url}`);
  opn(url);
});
