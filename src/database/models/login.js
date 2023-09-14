import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

// Define a entidade "Login" e seus atributos
const Login = sequelize.define('Login', {
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,// Permite que o valor seja gerado automaticamente
},

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  
   senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
});
// `sequelize.define` também retorno o modelo
console.log(User === sequelize.models.User); // true

module.exports = Login; 
