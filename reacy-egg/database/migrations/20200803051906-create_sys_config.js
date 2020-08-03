'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, NOW } = Sequelize;
    await queryInterface.createTable('sys_dict_type', {
      config_id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, comment: '参数主键' },
      config_name: { type: STRING(100), defaultValue: '', comment: '字典名称' },
      config_key: { type: STRING(100), defaultValue: '', comment: '参数键名' },
      config_value: { type: STRING(100), defaultValue: '', comment: '参数键值' },
      config_type: { type: STRING(10), defaultValue: 'N', comment: '系统内置（Y是 N否）' },
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
