'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, NOW } = Sequelize;
    await queryInterface.createTable('sys_user', {
      user_id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, comment: '用户ID' },
      dept_id: { type: INTEGER, defaultValue: null, comment: '部门ID' },
      user_name: { type: STRING(30), allowNull: false, comment: '用户账号' },
      nick_name: { type: STRING(30), allowNull: false, comment: '用户昵称' },
      user_type: { type: STRING(10), defaultValue: '00', comment: '用户类型（00系统用户）' },
      email: { type: STRING(30), defaultValue: '', comment: '用户昵称' },
      phonenumber: { type: STRING(30), defaultValue: '', comment: '手机号码' },
      sex: { type: INTEGER, defaultValue: 0, comment: '用户性别（0男 1女 2未知）' },
      avatar: { type: STRING(100), defaultValue: '', comment: '头像地址' },
      password: { type: STRING(100), defaultValue: '', comment: '密码' },
      remark: { type: STRING(500), defaultValue: null, comment: '备注' },
      status: { type: INTEGER, defaultValue: 0, comment: '帐号状态（0正常 1停用）' },
      del_flag: { type: INTEGER, defaultValue: 0, comment: '删除标志（0代表存在 2代表删除）' },
      login_ip: { type: STRING(50), defaultValue: '', comment: '最后登陆IP' },
      login_date: { type: DATE, comment: '最后登陆时间' },
      create_by: { type: STRING(64), defaultValue: '', comment: '创建者' },
      created_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '创建时间' },
      update_by: { type: STRING(64), defaultValue: '', comment: '更新者' },
      updated_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '更新时间' },
    }, {
      comment: '用户信息表',
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('sys_user');
  },
};
