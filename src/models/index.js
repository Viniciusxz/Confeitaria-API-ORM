import { Sequelize } from "sequelize";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const env = process.env.NODE_ENV || "development";
const configFile = JSON.parse(
  readFileSync(join(__dirname, "../config/config.json"), "utf-8")
);
const config = configFile[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

import ClienteModel from './cliente.js';
import CategoriaModel from './categoria.js';
import ProdutoModel from './produto.js';
import EncomendaModel from './encomenda.js';
import ItemEncomendaModel from './itemencomenda.js';
import AdministradoraModel from './administradora.js';

const Cliente = ClienteModel(sequelize);
const Categoria = CategoriaModel(sequelize);
const Produto = ProdutoModel(sequelize);
const Encomenda = EncomendaModel(sequelize);
const ItemEncomenda = ItemEncomendaModel(sequelize);
const Administradora = AdministradoraModel(sequelize);

const db = { sequelize, Cliente, Categoria, Produto, Encomenda, ItemEncomenda, Administradora };

export default db;