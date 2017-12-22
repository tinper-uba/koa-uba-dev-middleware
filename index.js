/**
 * koa2 dev middleware for uba-server
 * Version  : v0.0.1
 * Author   : Kvkens(yueming@yonyou.com)
 * Date     : 2017-12-22 12:25:24
 */

const webpackDev = require('webpack-dev-middleware');

/**
 * uba koa-dev-middleware
 * @param {*} compiler 
 * @param {*} opts 
 */
const devMiddleware = (compiler, opts) => {
  const middleware = webpackDev(compiler, opts)
  return async(ctx, next) => {
    await middleware(ctx.req, {
      end: (content) => {
        ctx.body = content;
      },
      setHeader: (name, value) => {
        ctx.set(name, value);
      }
    }, next);
  }
}

module.exports = devMiddleware;
