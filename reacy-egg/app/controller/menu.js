'use strict';

const Controller = require('../core/base_controller');

class MenuController extends Controller {
  async list() {
    const list = await this.ctx.service.menu.list();
    this.success({ list });
  }
}

module.exports = MenuController;
