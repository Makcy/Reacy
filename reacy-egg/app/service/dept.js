'use strict';

const { Service } = require('egg');
const { Op } = require('sequelize');

class Dept extends Service {
  async list() {
    return this.ctx.model.Dept.findAndCountAll({
      where: {
        parent_id: {
          [Op.or]: [ 0, null ],
        },
      },
      order: [[ 'order_num', 'desc' ], [ 'id', 'desc' ]],
      include: 'children',
      distinct: true,
    });
  }

  async find(id) {
    const { ctx } = this;
    const dept = await this.ctx.model.Dept.findByPk(id);
    if (!dept) {
      ctx.throw(ctx.NOT_FOUND, 'dept not found');
    }
    return dept;
  }

  async create(dept) {
    return this.ctx.model.User.create(dept);
  }

  async update({ id, updates }) {
    const { ctx } = this;
    const dept = await this.ctx.model.Dept.findByPk(id);
    if (!dept) {
      ctx.throw(ctx.NOT_FOUND, 'dept not found');
    }
    return dept.update(updates);
  }

  async del(id) {
    const { ctx } = this;
    const dept = await this.ctx.model.Dept.findByPk(id);
    if (!dept) {
      ctx.throw(ctx.NOT_FOUND, 'dept not found');
    }
    return dept.destroy();
  }
}

module.exports = Dept;
