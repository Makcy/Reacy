'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async getToken(user) {
    const { app } = this;
    return app.jwt.sign({ id: user.id, user: user.name }, app.config.jwt.secret);
  }

  async getProfile(id) {
    const user = await this.ctx.model.User.findByPk(id);
    return user;
  }
}

module.exports = LoginService;
