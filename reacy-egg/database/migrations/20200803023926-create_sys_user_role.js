'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER } = Sequelize;
    await queryInterface.createTable('sys_role_menu', {
      role_id: { type: INTEGER, allowNull: false, comment: '角色ID' },
      menu_id: { type: INTEGER, allowNull: false, comment: '菜单ID' },
    }, { comment: '角色和菜单关联表' });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('sys_role_menu');
  },
};
