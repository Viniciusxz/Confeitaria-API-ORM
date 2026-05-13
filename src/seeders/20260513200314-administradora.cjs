'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('administradora', [
      {
        nome:      'Admin',
        email:     'admin@confeitaria.com',
        senha:     '123456',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('administradora', null, {});
  }
};