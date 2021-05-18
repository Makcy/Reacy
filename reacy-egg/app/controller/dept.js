'use strict';

const Controller = require('../core/base_controller');

class DeptController extends Controller {
  async index() {
    const dept = await this.ctx.service.dept.find(this.ctx.params.id);
    this.success({ dept });
  }

  async list() {
    const list = await this.ctx.service.dept.list();
    this.success({ list });
  }
}

module.exports = DeptController;
