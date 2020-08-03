'use strict';

// https://sequelize.org/v5/class/lib/query-interface.js~QueryInterface.htm 文档
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, NOW } = Sequelize;
    await queryInterface.createTable('sys_dept', {
      dept_id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, comment: '部门ID' },
      parent_id: { type: INTEGER, defaultValue: 0, comment: '父部门ID' },
      ancestors: { type: STRING(50), defaultValue: '', comment: '祖级列表' },
      dept_name: { type: STRING(30), defaultValue: '', comment: '部门名称' },
      order_num: { type: INTEGER, defaultValue: 0, comment: '显示顺序' },
      leader: { type: STRING(20), defaultValue: null, comment: '负责人' },
      phone: { type: STRING(11), defaultValue: null, comment: '联系电话' },
      email: { type: STRING(50), defaultValue: null, comment: '邮箱' },
      status: { type: INTEGER, defaultValue: 0, comment: '部门状态（0正常 1停用）' },
      del_flag: { type: INTEGER, defaultValue: 0, comment: '删除标志（0代表存在 2代表删除）' },
      create_by: { type: STRING(64), defaultValue: '', comment: '创建者' },
      created_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '创建时间' },
      update_by: { type: STRING(64), defaultValue: '', comment: '更新者' },
      updated_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '更新时间' },
    }, { comment: '部门表' });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('sys_dept');
  },
};
