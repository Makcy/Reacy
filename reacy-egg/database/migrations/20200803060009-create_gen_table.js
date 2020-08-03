'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, NOW } = Sequelize;
    await queryInterface.createTable('gen_table', {
      table_id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, comment: '编号' },
      table_name: { type: STRING(200), defaultValue: '', comment: '表名称' },
      table_comment: { type: STRING(500), defaultValue: '', comment: '表描述' },
      class_name: { type: STRING(100), defaultValue: '', comment: '实体类名称' },
      tpl_category: { type: STRING(100), defaultValue: 'crud', comment: '使用的模板（crud单表操作 tree树表操作）' },
      package_name: { type: STRING(100), comment: '生成包路径' },
      module_name: { type: STRING(30), comment: '生成模块名' },
      business_name: { type: STRING(30), comment: '生成业务名' },
      function_name: { type: STRING(50), comment: '生成功能名' },
      function_author: { type: STRING(50), comment: '生成功能作者' },
      gen_type: { type: INTEGER, defaultValue: 0, comment: '生成代码方式（0zip压缩包 1自定义路径）' },
      gen_path: { type: STRING(50), defaultValue: '/', comment: '生成路径（不填默认项目路径）' },
      options: { type: STRING(1000), comment: '其它生成选项' },
      create_by: { type: STRING(64), defaultValue: '', comment: '创建者' },
      created_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '创建时间' },
      update_by: { type: STRING(64), defaultValue: '', comment: '更新者' },
      updated_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '更新时间' },
    }, { comment: '代码生成业务表' });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('gen_table');
  },
};
