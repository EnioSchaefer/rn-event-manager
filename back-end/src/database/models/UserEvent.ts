'use strict';

import { DataTypes, Model, ModelDefined } from "sequelize";
import { UserEvent } from "../types/UserEvent";
import sequelize from "./index";

type UserEventSequelizeModelCreator = ModelDefined<UserEvent, UserEvent>;

export type UserEventModel = Model<UserEvent>;

const UserEvent: UserEventSequelizeModelCreator = sequelize.define('UserEvent', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    field: 'user_id',
    references: {
      model: 'user',
      key: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  },
  eventId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    field: 'event_id',
    references: {
      model: 'event',
      key: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  },
  qrCode: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'qr_code',
  },
}, {
  timestamps: false,
  tableName: 'user_events',
  underscored: true,
});

export default UserEvent;