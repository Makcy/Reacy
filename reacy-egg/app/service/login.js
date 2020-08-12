'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async getToken(userId) {
    const { app } = this;
    return app.jwt.sign({ name: 'makcy' }, app.config.jwt.secret);
  }
}

module.exports = LoginService;
