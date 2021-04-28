'use strict';

const Controller = require('../core/base_controller')

class LoginController extends Controller {
  async index() {
    const { ctx, app } = this;
    const { code, username, password } = ctx.request.body;
    const VERIFY_KEY = `verify_${code}`;
    const verifyCode = await app.redis.get(`verify_${code}`);
    await app.redis.del(VERIFY_KEY);
    // TODO: encrypt password 
    if (!verifyCode) {
      this.fail(ctx.ERROR_CODE, '验证码过期');
    }
    const currentUser = await ctx.model.User.findOne({ where: { username, password } });
    if (!currentUser) {
      this.fail(ctx.ERROR_CODE, '账号或密码错误');
    }
    // 查询用户信息，生成token
    const token = await ctx.service.login.getToken(currentUser);
    return { token }
  }
}

module.exports = LoginController;
