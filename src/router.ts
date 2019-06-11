/*
 * @Description: Copyright (c) ydfk. All rights reserved
 * @Author: ydfk
 * @Date: 2019-06-11 13:18:04
 * @LastEditors: ydfk
 * @LastEditTime: 2019-06-11 13:30:07
 */
import Router from "koa-router";
import { home } from "./controller/index";

const router = new Router();

router.get("/", home.index);

export default router;
