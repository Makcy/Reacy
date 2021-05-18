'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Dept = app.model.define('dept', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    parent_id: INTEGER,
    name: STRING(30),
    order_num: {
      type: INTEGER,
      defaultValue: 0,
    },
    leader: STRING(20),
    phone: STRING(11),
    email: STRING(50),
    status: {
      type: INTEGER,
      defaultValue: 1,
    },
    create_by: INTEGER,
    update_by: INTEGER,
    created_at: DATE,
    updated_at: DATE,
    deleted_at: DATE,
  }, {
    timestamps: true,
  });

  Dept.associate = () => {
    app.model.Dept.hasMany(app.model.User);
    app.model.Dept.hasMany(app.model.Dept, { foreignKey: 'parent_id', as: 'children' });
  };

  return Dept;
};
