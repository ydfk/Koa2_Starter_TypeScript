/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2019-06-11 18:01:18
 * @LastEditors: ydfk
 * @LastEditTime: 2019-06-11 18:22:45
 */
import {Column } from "typeorm";
import {BaseEntity} from "@/dataBase/base.entity";

export class HomeEntity extends BaseEntity {
  @Column()
  name: string;
}
