import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
  class Cliente extends Model {
    static associate(models) {
      Cliente.hasMany(models.Encomenda, { foreignKey: 'clienteId' });
    }
  }

  Cliente.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    telefone: DataTypes.STRING,
    endereco: DataTypes.STRING,
  }, {
    sequelize,
    modelName: "Cliente",
    tableName: "clientes"
  });

  return Cliente;
};