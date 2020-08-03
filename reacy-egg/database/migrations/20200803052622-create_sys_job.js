'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, NOW } = Sequelize;
    await queryInterface.createTable('sys_job', {
      job_id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, comment: '任务ID' },
      job_name: { type: STRING(100), primaryKey: true, defaultValue: '', comment: '任务名称' },
      job_group: { type: STRING(100), primaryKey: true, defaultValue: 'DEFAULT', comment: '任务组名' },
      invoke_target: { type: STRING(100), allowNull: false, comment: '调用目标字符串' },
      cron_expression: { type: STRING(255), defaultValue: '', comment: 'cron执行表达式' },
      misfire_policy: { type: STRING(20), defaultValue: '3', comment: '计划执行错误策略（1立即执行 2执行一次 3放弃执行）' },
      concurrent: { type: INTEGER, defaultValue: 1, comment: '是否并发执行（0允许 1禁止）' },
      status: { type: INTEGER, defaultValue: 0, comment: '状态（0正常 1暂停）' },
      create_by: { type: STRING(64), defaultValue: '', comment: '创建者' },
      created_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '创建时间' },
      update_by: { type: STRING(64), defaultValue: '', comment: '更新者' },
      updated_at: { type: DATE, defaultValue: NOW, allowNull: false, comment: '更新时间' },
      remark: { type: STRING(500), defaultValue: null, comment: '备注' },
    }, { comment: '定时任务调度表' });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('sys_job');
  },
};
