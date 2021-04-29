'use strict';

const Controller = require('../core/base_controller');

class UserController extends Controller {
  async index() {
    const user = await this.ctx.service.user.find(this.ctx.params.id);
    this.success({ user });
  }
}

module.exports = UserController;
