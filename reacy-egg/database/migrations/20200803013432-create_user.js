'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;
    await queryInterface.createTable('user', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, comment: '用户ID' },
      dept_id: { type: INTEGER, defaultValue: null, comment: '部门ID' },
      name: { type: STRING(30), allowNull: false, unique: true, comment: '用户名' },
      email: { type: STRING(30), defaultValue: '', comment: '用户昵称' },
      phone: { type: STRING(30), defaultValue: '', comment: '手机号码' },
      sex: { type: STRING(10), defaultValue: 'male', comment: '用户性别' },
      avatar: { type: STRING(100), defaultValue: '', comment: '头像地址' },
      password: { type: STRING(100), defaultValue: '', comment: '密码' },
      remark: { type: STRING(500), defaultValue: null, comment: '备注' },
      status: { type: INTEGER, defaultValue: 1, comment: '帐号状态（1正常 0停用）' },
      login_ip: { type: STRING(50), defaultValue: '', comment: '最后登录IP' },
      last_login_at: { type: DATE, comment: '最后登录时间' },
      create_by: { type: INTEGER, defaultValue: null, comment: '创建者' },
      update_by: { type: INTEGER, defaultValue: null, comment: '更新者' },
      delete_by: { type: INTEGER, defaultValue: null, comment: '删除者' },
      created_at: DATE,
      updated_at: DATE,
      deleted_at: DATE,
    }, {
      comment: '用户信息表',
    });
    // await queryInterface.addIndex()
  },

  down: async queryInterface => {
    await queryInterface.dropTable('user');
  },
};
