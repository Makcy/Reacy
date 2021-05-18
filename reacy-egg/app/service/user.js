'use strict';

const { Service } = require('egg');
const crypto = require('crypto');

class User extends Service {
  async list({ offset = 0, limit = 10 }) {
    return this.ctx.model.User.findAndCountAll({
      offset,
      limit,
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    });
  }

  async find(id) {
    const { ctx } = this;
    const user = await this.ctx.model.User.findByPk(id, {
      include: 'dept',
    });
    if (!user) {
      ctx.throw(ctx.NOT_FOUND, 'user not found');
    }
    return user;
  }

  async create(user) {
    return this.ctx.model.User.create(user);
  }

  async update({ id, updates }) {
    const { ctx } = this;
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      ctx.throw(ctx.NOT_FOUND, 'user not found');
    }
    return user.update(updates);
  }

  async del(id) {
    const { ctx } = this;
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      ctx.throw(ctx.NOT_FOUND, 'user not found');
    }
    return user.destroy();
  }

  getMd5Data(data) {
    return crypto.createHash('md5').update(data).digest('hex');
  }
}

module.exports = User;
