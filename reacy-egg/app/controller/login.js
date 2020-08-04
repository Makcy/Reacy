'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx, app } = this;
    // ctx.body = 'hi, egg';
    await app.redis.set('foo', 'bar');
    ctx.body = await app.redis.get('foo');
  }
}

module.exports = LoginController;
