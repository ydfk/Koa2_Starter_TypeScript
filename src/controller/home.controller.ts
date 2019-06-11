import { Context } from "koa";

class HomeController {
  public async index(ctx: Context) {
    ctx.body = "Hello home 1!";
  }
}

export default new HomeController();
