import { DataTypes } from "sequelize";
import DB from "./index.cjs";
const sequelize = DB.sequelize;

  const Agendamento = sequelize.define(
    "Agendamento",
    {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    allowNull: false,
  },

  campo_mensagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  aceite: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  updatedAt: {
    type: DataTypes.DATE,
    allowNull:false,
},
},
{
  tableName: "agendamento",
}
);
  // Define as associações 
Agendamento.associate = function (models) {

  Agendamento.belongsTo(models.Mentor, {
  foreignKey: {
    allowNull: false,
  },
});
  Agendamento.belongsTo(models.Mentorado, {
    foreignKey: {
      allowNull: false,
  },
});
};

//Aqui começam as validações

// Exporta as entidades
export default Agendamento;
