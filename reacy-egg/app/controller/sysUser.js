'use strict';

const Controller = require('../core/base_controller');

class SysUserController extends Controller {
  async index() {
    this.success()    
  }
}

module.exports = SysUserController;
