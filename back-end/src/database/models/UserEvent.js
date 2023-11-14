'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserEvent = sequelize.define('UserEvent', {
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