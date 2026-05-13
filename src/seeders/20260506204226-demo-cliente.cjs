'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clientes', [
      {
        nome:      'Cliente Teste',
        cpf:       '12345678900',
        email:     'teste@email.com',
        senha:     '123456',
        telefone:  '81999999999',
        endereco:  'Rua Teste, 123',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  }
};