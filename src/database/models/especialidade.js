import { Sequelize, DataTypes } from "sequelize";

// Cria uma instância do Sequelize e especifica o banco de dados SQLite.
const sequelize = new Sequelize("sqlite::memory:");

const Especialidade = sequelize.define("Especialidade", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
  },
});

// Associação com a entidade "Area"
Especialidade.belongsTo(sequelize.models.Area, {
  foreignKey: {
    allowNull: false,
  },
});

export default Especialidade;
