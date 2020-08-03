'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER } = Sequelize;
    await queryInterface.createTable('sys_user_post', {
      user_id: { type: INTEGER, allowNull: false, comment: '用户ID' },
      post_id: { type: INTEGER, allowNull: false, comment: '岗位ID' },
    }, { comment: '用户与岗位关联表' });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('sys_user_post');
  },
};
