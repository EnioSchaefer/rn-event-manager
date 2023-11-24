'use strict';

import { DataTypes, ModelDefined, Optional } from "sequelize";
import { User } from "../types/User";
import sequelize from "./index";

export type UserInputableFields = Optional<User, 'id'>;

type UserSequelizeModelCreator = ModelDefined<User, UserInputableFields>;

const UserModel: UserSequelizeModelCreator = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'customer',
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'birth_date',
  },
}, {
  tableName: 'users',
  underscored: true,
});

export default UserModel;