import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

// Define a entidade Mentorado e seus atributos
const Mentorado = sequelize.define("Mentorado", {
  // Um identificador único para cada mentorado
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Permite que o valor seja gerado automaticamente
    unique: true,
    allowNull: false,
  },
  // O nome do mentorado
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // O email do mentorado
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  // O número de telefone do mentorado
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // A data de nascimento do mentorado
  dataNascimento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  // A área de interesse do mentorado
  areaInteresse: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// `sequelize.define` também retorno o modelo
console.log(Mentorado === sequelize.models.Mentorado); // true

export default Mentorado;