'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;
    await queryInterface.createTable('menu', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, comment: '菜单ID' },
      name: { type: STRING(64), allowNull: false, comment: '菜单名称' },
      parent_id: { type: INTEGER, defaultValue: null, comment: '父菜单ID' },
      order_num: { type: INTEGER, default: 0, comment: '显示顺序' },
      path: { type: STRING(200), defaultValue: '', comment: '路由地址' },
      component: { type: STRING(200), defaultValue: null, comment: '组件路径' },
      link: { type: STRING(64), defaultValue: null, comment: '外链地址' },
      is_visible: { type: INTEGER, defaultValue: 1, comment: '菜单状态（1显示 0隐藏）' },
      perms: { type: STRING(100), defaultValue: null, comment: '权限标识' },
      icon: { type: STRING(100), defaultValue: '#', comment: '菜单图标' },
      remark: { type: STRING(500), defaultValue: null, comment: '备注' },
      create_by: { type: INTEGER, defaultValue: null, comment: '创建者' },
      update_by: { type: INTEGER, defaultValue: null, comment: '更新者' },
      created_at: DATE,
      updated_at: DATE,
    }, { comment: '菜单权限表' });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('menu');
  },
};
