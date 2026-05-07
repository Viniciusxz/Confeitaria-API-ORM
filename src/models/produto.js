import { Model, DataTypes } from "sequelize";
export default (sequelize) => {
  class Produto extends Model {
    static associate(models) {
      Produto.belongsTo(models.Categoria, { foreignKey: 'categoriaId' });
      Produto.hasMany(models.ItemEncomenda, { foreignKey: 'produtoId' });
    }
  }
  Produto.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    foto: DataTypes.STRING,
    preco: DataTypes.FLOAT,
    status: DataTypes.STRING,
    categoriaId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: "Produto",
    tableName: "produtos"
  });
  return Produto;

}
  
