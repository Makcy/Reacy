'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', [
      {
        name: 'Admin',
        password: '123456',
      },
      {
        name: 'Dev',
        password: '123456',
      },
      {
        name: 'Guest',
        password: '123456',
      },
    ], {});
    await queryInterface.bulkInsert('dept', [
      {
        name: '北京分公司',
      },
      {
        name: '杭州分公司',
      },
      {
        name: '财务部',
        parent_id: 1,
      },
      {
        name: '运维部',
        parent_id: 1,
      },
      {
        name: '行政部',
        parent_id: 2,
      },
      {
        name: '技术部',
        parent_id: 2,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null, {});
    await queryInterface.bulkDelete('dept', null, {});
  },
};
