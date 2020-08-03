'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, NOW } = Sequelize;
    await queryInterface.createTable('sys_post', {
      post_id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, comment: '岗位ID' },
      post_code: { type: STRING(64), allowNull: false, comment: '岗位编码' },
      post_name: { type: STRING(64), allowNull: false, comment: '岗位名称' },
      post_sort: { type: INTEGER, allowNull: false, comment: '显示顺序' },
      status: { type: INTEGER, defaultValue: 0, comment: '状态（0正常 1停用）' },
      remark: { type: STRING(500), defaultValue: null, comment: '备注' },
      create_by: { type: STRING(64), defaultValue: '', comment: '创建者' },
      created_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '创建时间' },
      update_by: { type: STRING(64), defaultValue: '', comment: '更新者' },
      updated_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '更新时间' },
    }, { comment: '岗位信息表' });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('sys_post');
  },
};
