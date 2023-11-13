'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
  }, {
    timestamps: false,
    tableName: 'events',
    underscored: true,
  });
  
  return Event;
};