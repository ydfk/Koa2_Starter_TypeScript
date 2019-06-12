/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2019-06-12 10:31:46
 * @LastEditors: ydfk
 * @LastEditTime: 2019-06-12 11:04:39
 */
import { HomeEntity } from "@/entity";
import { EntityRepository, MongoRepository } from "typeorm";

@EntityRepository(HomeEntity)
export class HomeRepository extends MongoRepository<HomeEntity> {
  public async deleteAll() {
    this.deleteMany({});
  }

  public async findAll() {
    return this.find();
  }

  public async add(home: HomeEntity) {
    return this.insert(home);
  }
}
