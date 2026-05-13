export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('produto', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    nome: { type: Sequelize.STRING },
    descricao: { type: Sequelize.STRING },
    foto: { type: Sequelize.STRING },
    preco: { type: Sequelize.FLOAT },
    status: { type: Sequelize.STRING },
    categoriaId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references :{
        model: 'categoria',
        key: 'id'
      }
    },
    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE }
  });
}
export async function down(queryInterface) {
  await queryInterface.droptable('produto')
}
