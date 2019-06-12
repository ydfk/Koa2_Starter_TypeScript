/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2019-06-11 12:36:35
 * @LastEditors: ydfk
 * @LastEditTime: 2019-06-12 11:03:56
 */
import { Context } from "koa";
import {JsonController, Get, Ctx} from "routing-controllers";
import {InjectRepository} from "typeorm-typedi-extensions";
import { HomeRepository } from "@/repository";

@JsonController()
export class HomeController {
  @InjectRepository()
  private readonly homeRepository:HomeRepository

  @Get()
  public async index(@Ctx() ctx: Context) {
    await this.homeRepository.deleteAll();
    await this.homeRepository.add({
      name:"Hello koa"
    })
    const homes = await this.homeRepository.findAll();
    return homes[0].name;
  }
}