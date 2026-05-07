import { Model, DataTypes } from "sequelize";
export default (sequelize) => {
  class ItemEncomenda extends Model {
    static associate(models) {
      ItemEncomenda.belongsTo(models.Encomenda, { foreignKey: 'encomendaId' });
      ItemEncomenda.belongsTo(models.Produto, { foreignKey: 'produtoId' });
    }
  }
  ItemEncomenda.init({
    quantidade: DataTypes.INTEGER,
    subtotal: DataTypes.FLOAT,
    observacao: DataTypes.STRING,
    encomendaId: DataTypes.INTEGER,
    produtoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemEncomenda',
    tableName: 'itemencomendas'
  });
  return ItemEncomenda;
};