'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const clientes = await queryInterface.sequelize.query(
      'SELECT id FROM clientes LIMIT 1',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const clienteId = clientes[0]?.id;

    await queryInterface.bulkInsert('encomenda', [
      {
        status:       'pendente',
        pagamento:    'pix',
        entrega:      'retirada',
        data_entrega: new Date('2025-12-31'),
        total:        94.40,
        clientId:     clienteId,
        createdAt:    new Date(),
        updatedAt:    new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('encomenda', null, {});
  }
};