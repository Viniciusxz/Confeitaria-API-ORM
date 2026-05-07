import { Model, DataTypes } from "sequelize";

export default (sequelize) => {

  class Categoria extends Model {
    static associate(models) {

    }
  }

  Categoria.init({
    nome: DataTypes.STRING,
  }, {
    sequelize,
    modelName: "Categoria",
    tableName: "categoria"
  });

  return Categoria;
};