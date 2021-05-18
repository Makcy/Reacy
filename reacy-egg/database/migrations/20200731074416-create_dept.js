'use strict';

// https://sequelize.org/v5/class/lib/query-interface.js~QueryInterface.htm 文档
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;
    await queryInterface.createTable('dept', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, comment: '部门ID' },
      parent_id: { type: INTEGER, defaultValue: null, comment: '父部门ID' },
      name: { type: STRING(30), defaultValue: '', comment: '部门名称' },
      order_num: { type: INTEGER, defaultValue: 0, comment: '显示顺序' },
      leader: { type: STRING(20), defaultValue: null, comment: '负责人' },
      phone: { type: STRING(11), defaultValue: null, comment: '联系电话' },
      email: { type: STRING(50), defaultValue: null, comment: '邮箱' },
      status: { type: INTEGER, defaultValue: 0, comment: '部门状态（1正常 0停用）' },
      create_by: { type: STRING(64), defaultValue: null, comment: '创建者' },
      update_by: { type: STRING(64), defaultValue: null, comment: '更新者' },
      created_at: DATE,
      updated_at: DATE,
      deleted_at: DATE,
    }, { comment: '部门表' });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('dept');
  },
};
