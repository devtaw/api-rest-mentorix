import { Sequelize, DataTypes } from "sequelize";

// Cria uma instância do Sequelize e especifica o banco de dados SQLite.
const sequelize = new Sequelize("sqlite::memory:");

// Define o modelo "Categoria" com os atributos
const Categoria = sequelize.define("Categoria", {
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  nomeCategoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  descricao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
// `sequelize.define` também retorno o modelo
console.log(User === sequelize.models.User); // true

// Exporta o modelo "Categoria" para ser usado em outras partes do aplicativo.
module.exports = Categoria;
