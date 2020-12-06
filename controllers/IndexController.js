import Controller from "./Controller";
class IndexController extends Controller {
  constructor() {
    super();
  }
  async actionIndex(ctx) {
    // 首屏跳转index
    ctx.body = await ctx.render("index", {
      message: "后端数据",
    });
  }
}
export default IndexController;
