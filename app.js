import config from "./config";
import Koa from "koa";
import render from "koa-swig";
import initController from "./controllers";
import errorHandler from "./middlewares/errorHandler";
import { getDate, parseTime } from "./utils/time";
import { historyApiFallback } from "koa2-connect-history-api-fallback";
import staticServer from "koa-static";
import log4js from "log4js";
import co from "co";
const app = new Koa();
// 错误日志记录
log4js.configure({
  appenders: { globalError: { type: "file", filename: "./log/error.log" } },
  // 只有错误时error级别才会写入文件
  categories: { default: { appenders: ["globalError"], level: "error" } },
});

const logger = log4js.getLogger("cheese");
// swig 模版
app.context.render = co.wrap(
  render({
    catch: config.cache,
    root: config.viewDir,
    ext: "html",
    varControls: ["[[", "]]"],
  })
);
// 中间件
app.use(staticServer(config.staticDir));
app.use(historyApiFallback({ index: "/", whiteList: ["/api"] }));
errorHandler.error(app, logger);

initController(app);
app.listen(config.port);
console.log(`server runing ${config.port} ${parseTime(new Date().getTime())}`);
