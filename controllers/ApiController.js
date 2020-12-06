import Controller from "./Controller";
class ApiController extends Controller {
  constructor() {
    super();
  }
  actionData(ctx) {
    // 首屏跳转index
    ctx.body = [
      {
        a: 1,
      },
    ];
  }
}
export default ApiController;
