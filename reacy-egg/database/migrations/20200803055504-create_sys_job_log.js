'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, NOW } = Sequelize;
    await queryInterface.createTable('sys_job_log', {
      job_log_id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, comment: '任务日志ID' },
      job_name: { type: STRING(100), allowNull: false, comment: '任务名称' },
      job_group: { type: STRING(100), allowNull: false, comment: '任务组名' },
      job_message: { type: STRING(500), allowNull: false, comment: '日志信息' },
      invoke_target: { type: STRING(100), allowNull: false, comment: '调用目标字符串' },
      exception_info: { type: STRING(2000), defaultValue: '', comment: '异常信息' },
      status: { type: INTEGER, defaultValue: 0, comment: '状态（0正常 1暂停）' },
      created_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '创建时间' },
    }, { comment: '定时任务调度日志表' });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('sys_job_log');
  },
};
