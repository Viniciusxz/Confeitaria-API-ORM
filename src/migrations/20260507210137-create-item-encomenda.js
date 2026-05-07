export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('itemencomenda', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    quantidade: { type: Sequelize.INTEGER },
    subtotal: { type: Sequelize.FLOAT },
    observacao: { type: Sequelize.STRING },
    encomendaId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'encomendas',
        key: 'id'
      }
    },
    produtoId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'produtos',
        key: 'id'
      }
    },
    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE }
  });
}

export async function down(queryInterface) {
  await queryInterface.droptable('itemencomenda')
}