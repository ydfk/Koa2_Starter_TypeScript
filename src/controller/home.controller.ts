import { Context } from "koa";
import Singleton from "@/core/singleton";
import { MongoRepository, getMongoRepository } from "typeorm";
import { HomeEntity } from "@/entity";

const homeRepository = getMongoRepository(HomeEntity)

class HomeController {
  public async index(ctx: Context) {
    await homeRepository.deleteMany({
      name:"Hello koa"
    });
    await homeRepository.insertOne({
      name:"Hello koa"
    })
    const homes = await homeRepository.find();
    ctx.body = homes[0].name;
  }
}

export default new HomeController();
