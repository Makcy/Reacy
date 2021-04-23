'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, NOW, BOOLEAN } = Sequelize;
    await queryInterface.createTable('sys_users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, comment: '用户ID' },
      dept_id: { type: INTEGER, defaultValue: null, comment: '部门ID' },
      username: { type: STRING(30), allowNull: false, comment: '用户账号' },
      nickname: { type: STRING(30), allowNull: false, comment: '用户昵称' },
      type: { type: STRING(10), defaultValue: 'sys', comment: '用户类型（sys）' },
      email: { type: STRING(30), defaultValue: '', comment: '用户昵称' },
      phone: { type: STRING(30), defaultValue: '', comment: '手机号码' },
      sex: { type: STRING(10), defaultValue: 'male', comment: '用户性别' },
      avatar: { type: STRING(100), defaultValue: '', comment: '头像地址' },
      password: { type: STRING(100), defaultValue: '', comment: '密码' },
      remark: { type: STRING(500), defaultValue: null, comment: '备注' },
      status: { type: INTEGER, defaultValue: 0, comment: '帐号状态（0正常 1停用）' },
      login_ip: { type: STRING(50), defaultValue: '', comment: '最后登录IP' },
      last_login_at: { type: DATE, comment: '最后登录时间' },
      create_by: { type: INTEGER, defaultValue: null, comment: '创建者' },
      update_by: { type: INTEGER, defaultValue: null, comment: '更新者' },
      delete_by: { type: INTEGER, defaultValue: null, comment: '删除者' },
      created_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '创建时间' },
      updated_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '更新时间' },
      deleted_at: { type: DATE, defaultValue: null, allowNull: true, comment: '删除时间' },
    }, {
      comment: '用户信息表',
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('sys_user');
  },
};
