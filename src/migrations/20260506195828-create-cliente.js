export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('clientes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    nome: { type: Sequelize.STRING },
    cpf: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    senha: { type: Sequelize.STRING },
    telefone: { type: Sequelize.STRING },
    endereco: { type: Sequelize.STRING },
    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE }
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('clientes');
}