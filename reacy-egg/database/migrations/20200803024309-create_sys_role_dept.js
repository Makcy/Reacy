'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER } = Sequelize;
    await queryInterface.createTable('sys_role_dept', {
      role_id: { type: INTEGER, allowNull: false, comment: '角色id' },
      dept_id: { type: INTEGER, allowNull: false, comment: '部门id' },
    }, { comment: '角色和部门关联表' });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('sys_role_dept');
  },
};
