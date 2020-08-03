'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, NOW } = Sequelize;
    await queryInterface.createTable('sys_role', {
      role_id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, comment: '角色ID' },
      role_name: { type: STRING(64), allowNull: false, comment: '角色名称' },
      role_key: { type: STRING(100), allowNull: false, comment: '角色权限字符串' },
      role_sort: { type: INTEGER, allowNull: false, comment: '显示顺序' },
      data_scope: { type: INTEGER, defaultValue: 1, comment: '数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限）' },
      status: { type: INTEGER, defaultValue: 0, comment: '角色状态（0正常 1停用）' },
      del_flag: { type: INTEGER, defaultValue: 0, comment: '删除标志（0代表存在 2代表删除）' },
      remark: { type: STRING(500), defaultValue: null, comment: '备注' },
      create_by: { type: STRING(64), defaultValue: '', comment: '创建者' },
      created_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '创建时间' },
      update_by: { type: STRING(64), defaultValue: '', comment: '更新者' },
      updated_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '更新时间' },
    }, { comment: '角色信息表' });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('sys_role');
  },
};
