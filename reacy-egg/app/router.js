'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/captchaImage', controller.util.captchaImage);
  router.post('/login', controller.login.getToken);
  router.get('/getProfile', jwt, controller.login.getProfile);
  router.get('/user/:id', jwt, controller.user.index);
  router.get('/depts', jwt, controller.dept.list);
  router.get('/dept/:id', jwt, controller.dept.index);
  router.get('/menus', jwt, controller.menu.list);
};
