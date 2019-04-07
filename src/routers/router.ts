import homeController from "@/controllers/homeController";
import Router from "koa-router";

const router = new Router();

router.get("/", homeController.index);
