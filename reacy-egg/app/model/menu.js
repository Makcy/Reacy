'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Menu = app.model.define('menu', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING(64),
      allowNull: false,
    },
    parent_id: INTEGER,
    order_num: {
      type: INTEGER,
      defaultValue: 0,
    },
    path: {
      type: STRING(30),
      defaultValue: '',
    },
    component: STRING(200),
    link: STRING(64),
    remark: STRING(500),
    perms: STRING(100),
    icon: {
      type: STRING(100),
      defaultValue: '#',
    },
    is_visible: {
      type: INTEGER,
      defaultValue: 1,
    },
    create_by: INTEGER,
    update_by: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  }, {
    timestamps: true,
  });

  Menu.associate = () => {
    app.model.Menu.hasMany(app.model.Menu, { foreignKey: 'parent_id', as: 'children' });
  };

  return Menu;
};
