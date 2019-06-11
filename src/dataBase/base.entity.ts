/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2019-06-11 18:02:13
 * @LastEditors: ydfk
 * @LastEditTime: 2019-06-11 18:22:20
 */
import { ObjectID, ObjectIdColumn } from "typeorm";

export abstract class BaseEntity {
  @ObjectIdColumn()
  id?: ObjectID;
}
