'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categoria', [
      { nome: 'Bolos' },
      { nome: 'Tortas' },
      { nome: 'Doces' },
      { nome: 'Salgados' },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categoria', null, {});
  }
};