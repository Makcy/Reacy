'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sys_dept', [{
      parent_id: 0,
      ancestors: '0',
      dept_name: '若依科技',
      order_num: 0,
      leader: '若依',
      phone: '15888888888',
      email: 'ry@qq.com',
      status: 0,
      del_flag: 0,
      create_time: new Date(),
      create_by: 'admin',
      update_time: new Date(),
      update_by: 'ry',
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
