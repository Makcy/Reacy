'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, NOW } = Sequelize;
    await queryInterface.createTable('sys_menu', {
      menu_id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, comment: '菜单ID' },
      menu_name: { type: STRING(64), allowNull: false, comment: '菜单名称' },
      parent_id: { type: INTEGER, defaultValue: 0, comment: '父菜单ID' },
      order_num: { type: INTEGER, default: 0, comment: '显示顺序' },
      path: { type: STRING(200), defaultValue: '', comment: '路由地址' },
      component: { type: STRING(200), defaultValue: null, comment: '组件路径' },
      is_frame: { type: INTEGER, defaultValue: 1, comment: '是否为外链（0是 1否）' },
      menu_type: { type: STRING(10), defaultValue: null, comment: '菜单类型（M目录 C菜单 F按钮）' },
      visible: { type: INTEGER, defaultValue: 0, comment: '菜单状态（0显示 1隐藏）' },
      status: { type: INTEGER, defaultValue: 0, comment: '菜单状态（0正常 1停用）' },
      perms: { type: STRING(100), defaultValue: null, comment: '权限标识' },
      icon: { type: STRING(100), defaultValue: '#', comment: '菜单图标' },
      remark: { type: STRING(500), defaultValue: null, comment: '备注' },
      create_by: { type: STRING(64), defaultValue: '', comment: '创建者' },
      created_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '创建时间' },
      update_by: { type: STRING(64), defaultValue: '', comment: '更新者' },
      updated_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '更新时间' },
    }, { comment: '菜单权限表' });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('sys_menu');
  },
};
