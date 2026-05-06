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

export { sequelize };