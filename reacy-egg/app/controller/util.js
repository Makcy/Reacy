'use strict';

const Controller = require('egg').Controller;
const captcha = require('trek-captcha');

class UtilController extends Controller {
  async captchaImage() {
    const { ctx, app } = this;
    const { token, buffer } = await captcha({ size: 4 });
    await app.redis.set(`verify_${token}`, token, 2000);
    ctx.body = { token, buffer: Buffer.from(buffer).toString('base64') };
  }
}

module.exports = UtilController;
