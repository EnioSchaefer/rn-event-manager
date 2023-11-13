'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      role: {
        type: Sequelize.STRING(8),
        allowNull: false,
        defaultValue: 'customer',
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      birthDate: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    }, {
      timestamps: true,
    })
  },

  async down (queryInterface, _Sequelize) {
      await queryInterface.dropTable('users');
  }
};
