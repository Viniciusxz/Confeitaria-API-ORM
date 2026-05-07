export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('encomenda', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    status: { type: Sequelize.STRING },
    pagamento: { type: Sequelize.STRING },
    entrega: { type: Sequelize.STRING },
    data_entrega: { type: Sequelize.DATE },
    total: { type: Sequelize.FLOAT },
    clientId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'clientes',
        key: 'id'
      }
    },
    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE }
  });
}

export async function down(queryInterface) {
  await queryInterface.droptable('encomenda')
}