'use strict';

import { DataTypes, Model, ModelDefined, Optional } from "sequelize";
import { Event } from "../types/Event";
import sequelize from "./index";

export type EventInputableFields = Optional<Event, 'id'>;

type EventSequelizeModelCreator = ModelDefined<Event, EventInputableFields>;

export type EventModel = Model<Event, EventInputableFields>;

const EventModel: EventSequelizeModelCreator = sequelize.define('Event', {
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
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  ownerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'owner_id',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    references: {
      model: 'users',
      key: 'id'
    }
  },
}, {
  timestamps: false,
  tableName: 'events',
  underscored: true,
});

export default EventModel;