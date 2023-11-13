'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserEvent = sequelize.define('UserEvent', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    eventId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    qrCode: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'user_events',
    underscored: true,
  });
  
  UserEvent.associate = (models) => {
    models.Event.belongsToMany(models.User, {
      as: 'events',
      through: UserEvent,
      foreignKey: 'id',
      otherKey: 'userId'
    });
  };

  return UserEvent;
};