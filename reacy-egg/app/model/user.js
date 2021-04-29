'use strict';

module.exports = app => {
  const {
    STRING,
    INTEGER,
    DATE
  } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dept_id: {
      type: INTEGER,
      defaultValue: null,
      references: {
        model: 'dept',
        key: 'id',
      },
    },
    name: {
      type: STRING(30),
      allowNull: false,
      unique: true
    },
    email: {
      type: STRING(30),
      validate: {
        isEmail: true,
      },
    },
    phone: STRING(30),
    sex: {
      type: STRING(10),
      defaultValue: 'male',
      validate: {
        isIn: [[ 'male', 'female', 'unknown' ]],
      },
    },
    avatar: STRING(100),
    password: STRING(100),
    remark: STRING(500),
    status: {
      type: INTEGER,
      defaultValue: 1,
    },
    create_by: {
      type: INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    update_by: {
      type: INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    delete_by: {
      type: INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    last_login_at: DATE,
    created_at: DATE,
    updated_at: DATE,
    deleted_at: DATE,
  }, {
    timestamps: true
  });
  return User;
};
