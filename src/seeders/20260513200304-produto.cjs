'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Desabilita checagem de foreign key no SQLite
    await queryInterface.sequelize.query('PRAGMA foreign_keys = OFF');

    const categorias = await queryInterface.sequelize.query(
      'SELECT id, nome FROM categoria',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const getId = (nome) => categorias.find(c => c.nome === nome)?.id;

    await queryInterface.bulkInsert('produto', [
      {
        nome:        'Bolo Red Velvet',
        descricao:   'Bolo de massa vermelha com cream cheese',
        foto:        'red-velvet.jpg',
        preco:       89.90,
        status:      'disponivel',
        categoriaId: getId('Bolos'),
        createdAt:   new Date(),
        updatedAt:   new Date()
      },
      {
        nome:        'Bolo de Cenoura',
        descricao:   'Bolo de cenoura com cobertura de chocolate',
        foto:        'cenoura.jpg',
        preco:       65.00,
        status:      'disponivel',
        categoriaId: getId('Bolos'),
        createdAt:   new Date(),
        updatedAt:   new Date()
      },
      {
        nome:        'Torta de Limão',
        descricao:   'Torta cremosa de limão siciliano',
        foto:        'torta-limao.jpg',
        preco:       75.00,
        status:      'disponivel',
        categoriaId: getId('Tortas'),
        createdAt:   new Date(),
        updatedAt:   new Date()
      },
      {
        nome:        'Brigadeiro Gourmet',
        descricao:   'Brigadeiro gourmet de chocolate belga',
        foto:        'brigadeiro.jpg',
        preco:       4.50,
        status:      'disponivel',
        categoriaId: getId('Doces'),
        createdAt:   new Date(),
        updatedAt:   new Date()
      },
    ]);

    // Reabilita depois
    await queryInterface.sequelize.query('PRAGMA foreign_keys = ON');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produto', null, {});
  }
};