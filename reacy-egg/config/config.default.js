/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1596095870675_1860';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  const sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306',
    database: 'Reacy',
    username: 'root',
    password: '123456',
  };

  const redis = {
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: null,
      db: 0,
    },
  };


  return {
    ...config,
    ...userConfig,
    sequelize,
    redis,
  };
};
