'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/captchaImage', controller.util.captchaImage);
  router.post('/login', controller.login.index);
  router.get('/user', app.jwt, controller.sysUser.index);
};
