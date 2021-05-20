'use strict';

const Service = require('egg').Service;

class MenuService extends Service {
  async list() {
    return this.ctx.model.Menu.findAndCountAll({
      where: {
        parent_id: null,
      },
      order: [[ 'order_num', 'desc' ], [ 'id', 'desc' ]],
      include: 'children',
      distinct: true,
    });
  }
}

module.exports = MenuService;
