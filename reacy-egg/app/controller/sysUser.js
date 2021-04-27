'use strict';

const Controller = require('../core/base_controller');

class SysUserController extends Controller {
  async index() {
    const user = await this.ctx.service.sysUser.find(this.ctx.params.id);
    this.success({ user });
  }
}

module.exports = SysUserController;
