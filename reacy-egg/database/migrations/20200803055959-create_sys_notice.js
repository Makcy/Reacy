'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, NOW } = Sequelize;
    await queryInterface.createTable('sys_notice', {
      notice_id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, comment: '公告ID' },
      notice_title: { type: STRING(50), allowNull: false, comment: '公告标题' },
      notice_type: { type: INTEGER, allowNull: false, comment: '公告类型（1通知 2公告）' },
      notice_content: { type: STRING(2000), allowNull: false, comment: '公告内容' },
      status: { type: INTEGER, defaultValue: 0, comment: '状态（0正常 1暂停）' },
      remark: { type: STRING(500), defaultValue: null, comment: '备注' },
      create_by: { type: STRING(64), defaultValue: '', comment: '创建者' },
      created_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '创建时间' },
      update_by: { type: STRING(64), defaultValue: '', comment: '更新者' },
      updated_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '更新时间' },
    }, { comment: '通知公告表' });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('sys_notice');
  },
};
