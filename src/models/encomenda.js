import { Model, DataTypes } from "sequelize";

export default (sequelize) => {

  class Encomenda extends Model {
    static associate(models) {
      Encomenda.belongsTo(models.Cliente, { foreignKey: 'clienteId'});
    }
  }

  Encomenda.init({
    status: DataTypes.STRING,
    pagamento: DataTypes.STRING,
    entrega: DataTypes.STRING,
    data_entrega: DataTypes.DATE,
    total: DataTypes.FLOAT,
    clienteId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: "Encomenda",
    tableName: "encomendas"
  });

  return Encomenda;
}