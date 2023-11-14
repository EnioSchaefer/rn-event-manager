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
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING(20),
        allowNull: true,
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
      role: {
        type: Sequelize.STRING(8),
        allowNull: false,
        defaultValue: 'customer',
      },
      birthDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'birth_date',
      }
    }, {
      underscored: true,
    })
  },

  async down (queryInterface, _Sequelize) {
      await queryInterface.dropTable('users');
  }
};
