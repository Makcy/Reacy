'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, NOW } = Sequelize;
    await queryInterface.createTable('sys_dict_type', {
      dict_id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, comment: '字典ID' },
      dict_name: { type: STRING(100), defaultValue: '', comment: '字典名称' },
      dict_type: { type: STRING(100), unique: true, defaultValue: '', comment: '字典类型' },
      status: { type: INTEGER, defaultValue: 0, comment: '状态（0正常 1停用）' },
      create_by: { type: STRING(64), defaultValue: '', comment: '创建者' },
      created_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '创建时间' },
      update_by: { type: STRING(64), defaultValue: '', comment: '更新者' },
      updated_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '更新时间' },
      remark: { type: STRING(500), defaultValue: null, comment: '备注' },
    }, { comment: '字典类型表' });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('sys_dict_type');
  },
};
