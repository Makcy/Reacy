'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('dept', [
     {
       name: '杭州分部',
     },
    //  {
    //    parent_id: 1,
    //    name: '人事部'
    //  },
    //  {
    //    parent_id: 1,
    //    name: '财务部',
    //  }
  ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('dept', null, {});
  }
};
