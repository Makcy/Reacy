'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx, app } = this;
    const { code, username, password } = ctx.request.body;
    const VERIFY_KEY = `verify_${code}`;
    const verifyCode = await app.redis.get(`verify_${code}`);
    await app.redis.del(VERIFY_KEY);
    if (!verifyCode) {
      // 验证码过期 return error
      return new Error('verify code timeout')
    }
    const currentUser = await ctx.model.User.findOne({where: {id: 1}})
    if (!currentUser) {
      // 账号或密码错误
    }
    // 查询用户信息，生成token
    const token = await ctx.service.login.getToken(currentUser);
    return { token }
  }
}

module.exports = LoginController;
