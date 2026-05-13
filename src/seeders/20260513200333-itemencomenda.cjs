'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('PRAGMA foreign_keys = OFF');

    const encomendas = await queryInterface.sequelize.query(
      'SELECT id FROM encomenda LIMIT 1',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const produtos = await queryInterface.sequelize.query(
      'SELECT id FROM produto LIMIT 2',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    await queryInterface.bulkInsert('itemencomenda', [
      {
        quantidade:  1,
        subtotal:    89.90,
        observacao:  'Sem glúten',
        encomendaId: encomendas[0]?.id,
        produtoId:   produtos[0]?.id,
        createdAt:   new Date(),
        updatedAt:   new Date()
      },
      {
        quantidade:  1,
        subtotal:    4.50,
        observacao:  'Caixa com 1 unidade',
        encomendaId: encomendas[0]?.id,
        produtoId:   produtos[1]?.id,
        createdAt:   new Date(),
        updatedAt:   new Date()
      },
    ]);

    await queryInterface.sequelize.query('PRAGMA foreign_keys = ON');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('itemencomenda', null, {});
  }
};