'use strict';

const Controller = require('../core/base_controller');

class UserController extends Controller {
  async index() {
    this.success()    
  }
}

module.exports = UserController;
