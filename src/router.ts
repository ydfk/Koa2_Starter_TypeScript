/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2019-06-11 13:18:04
 * @LastEditors: ydfk
 * @LastEditTime: 2019-06-11 16:57:22
 */
import Router from "koa-router";
import { home } from "@/controller";

const router = new Router();

router.get("/", home.index);

export default router;
