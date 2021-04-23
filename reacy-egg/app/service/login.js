'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async getToken(user) {
    const { app } = this;
    return app.jwt.sign({ id: user.id, user: user.name }, app.config.jwt.secret);
  }
}

module.exports = LoginService;
