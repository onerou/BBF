import Router from "@koa/router";
import IndexController from "./IndexController";
import ApiController from "./ApiController";
const router = new Router();
let indexController = new IndexController();
let apiController = new ApiController();
function initController(app) {
  router.get("/", indexController.actionIndex);
  router.get("/api/getData", apiController.actionData);
  // response
  app.use(router.routes()).use(router.allowedMethods());
}

export default initController;
