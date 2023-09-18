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

Agendamento.associate = function (models) {
  Agendamento.hasMany(models.Mentor);
  Agendamento.belongsTo(models.Mentorado);
  };

  export default AreaAtuacao;
