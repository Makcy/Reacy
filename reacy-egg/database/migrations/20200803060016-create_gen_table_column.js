'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, NOW } = Sequelize;
    await queryInterface.createTable('gen_table_column', {
      column_id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, comment: '编号' },
      table_id: { type: STRING(64), comment: '归属表编号' },
      column_name: { type: STRING(200), comment: '列名称' },
      column_comment: { type: STRING(500), comment: '列描述' },
      column_type: { type: STRING(100), comment: '列类型' },
      java_type: { type: STRING(500), comment: 'JAVA类型' },
      java_field: { type: STRING(200), comment: 'JAVA字段名' },
      is_pk: { type: INTEGER, comment: '是否主键（1是）' },
      is_increment: { type: INTEGER, comment: '是否主键（1是）' },
      is_required: { type: INTEGER, comment: '是否自增（1是）' },
      is_insert: { type: INTEGER, comment: '是否为插入字段（1是）' },
      is_edit: { type: INTEGER, comment: '是否编辑字段（1是）' },
      is_list: { type: INTEGER, comment: '是否列表字段（1是）' },
      is_query: { type: INTEGER, comment: '是否查询字段（1是）' },
      query_type: { type: STRING(200), defaultValue: 'EQ', comment: '查询方式（等于、不等于、大于、小于、范围）' },
      html_type: { type: STRING(200), comment: '显示类型（文本框、文本域、下拉框、复选框、单选框、日期控件）' },
      dict_type: { type: STRING(200), defaultValue: '', comment: '字典类型' },
      sort: { type: INTEGER, comment: '排序' },
      create_by: { type: STRING(64), defaultValue: '', comment: '创建者' },
      created_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '创建时间' },
      update_by: { type: STRING(64), defaultValue: '', comment: '更新者' },
      updated_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '更新时间' },
    }, { comment: '代码生成业务表字段' });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('gen_table_column');
  },
};
