import Singleton from "core/singleton";
import { Context } from "koa";

class HomeController extends Singleton {
  public index = async (ctx: Context) => {
    ctx.body = "Hello World!";
  };
}

export default HomeController.getInstance() as HomeController;
