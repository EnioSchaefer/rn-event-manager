'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_events', {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      eventId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      qrCode: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
    }, {
      timestamps: false,
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('user_events');
  }
};
