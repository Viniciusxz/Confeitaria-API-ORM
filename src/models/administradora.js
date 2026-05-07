import { Model, DataTypes } from "sequelize";
export default (sequelize) => {
  class Administradora extends Model {
    static associate(models) {
      
    }
  }
  Administradora.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Administradora',
    tableName: 'administradora',
  });
  return Administradora;
};