let evn = process.env.NODE_ENV;
import prodConfig from "./production.config";
import devConfig from "./development.config";
import { join } from "path";
const baseConfig = {
  viewDir: join(__dirname, "..", "views"),
  staticDir: join(__dirname, "..", "assets"),
};
export default Object.assign(
  baseConfig,
  evn === "production" ? prodConfig : devConfig
);
