class ErrorHandler {
  static error(app, logger) {
    // 500 错误
    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (e) {
        logger.error(e);
      }
    });
    // 404 错误
    app.use(async (ctx, next) => {
      await next();
      if (ctx.status === 404) {
        ctx.body = `<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>`;
      }
    });
  }
}
export default ErrorHandler;
