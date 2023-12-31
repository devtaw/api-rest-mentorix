import MentorModel from "../models/mentor.mjs";
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

    nomeCompleto: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    profissao: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    campoMensagem: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    aceite: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    mentor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: MentorModel,
        key: "id",
      },
    },

    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
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
};
// Exporta as entidades
export default Agendamento;
