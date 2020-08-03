'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;
    await queryInterface.createTable('sys_oper_log', {
      oper_id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, comment: '日志ID' },
      title: { type: STRING(64), defaultValue: '', comment: '模块标题' },
      business_type: { type: INTEGER, defaultValue: 0, comment: '业务类型（0其它 1新增 2修改 3删除）' },
      method: { type: STRING(100), defaultValue: '', comment: '方法名称' },
      request_method: { type: STRING(10), defaultValue: '', comment: '请求方式' },
      operator_type: { type: INTEGER, defaultValue: 0, comment: '操作类别（0其它 1后台用户 2手机端用户）' },
      oper_name: { type: STRING(50), defaultValue: '', comment: '操作人员' },
      dept_name: { type: STRING(50), defaultValue: '', comment: '部门名称' },
      status: { type: INTEGER, defaultValue: 0, comment: '操作状态（0正常 1异常）' },
      oper_url: { type: STRING(255), defaultValue: '', comment: '请求URL' },
      oper_ip: { type: STRING(50), defaultValue: '', comment: '主机地址' },
      oper_location: { type: STRING(255), defaultValue: '', comment: '操作地点' },
      oper_param: { type: STRING(2000), defaultValue: '', comment: '请求参数' },
      json_result: { type: STRING(2000), defaultValue: '', comment: '返回参数' },
      error_msg: { type: STRING(2000), defaultValue: '', comment: '错误消息' },
      oper_time: { type: DATE, comment: '操作时间' },
    }, { comment: '操作日志记录' });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('sys_oper_log');
  },
};
