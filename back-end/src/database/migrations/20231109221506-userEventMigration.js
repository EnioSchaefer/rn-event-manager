'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_events', {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'user_id',
      },
      eventId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'event_id',
      },
      qrCode: {
        type: Sequelize.STRING(200),
        allowNull: false,
        field: 'qr_code',
      },
    }, {
      timestamps: false,
      underscored: true,
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('user_events');
  }
};
