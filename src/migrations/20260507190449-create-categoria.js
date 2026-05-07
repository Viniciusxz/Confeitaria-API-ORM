export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('categoria', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    nome: { type: Sequelize.STRING }
  }); 
}

export async function down(queryInterface) {
  await queryInterface.droptable('categoria');
}