import MentorModel from "../models/mentor.mjs";
import { DataTypes } from "sequelize";
import DB from "./index.cjs";
const sequelize = DB.sequelize;
// Define o modelo "MentorEspecialidade" para representar a associação entre Mentores e Especialidades.
const MentorEspecialidade = sequelize.define(
  "MentorEspecialidade",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },

    mentor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: MentorModel,
        key: "id",
      },
    },

    especialidades: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    // Define os campos "createdAt" e "updatedAt" do modelo.
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
    // Define o nome da tabela no banco de dados como "mentor_especialidade".
    tableName: "mentor_especialidade",
  }
);

// Define as associações
MentorEspecialidade.associate = function (models) {
  MentorEspecialidade.belongsTo(models.MentorModel, {
    foreignKey: {
      allowNull: false,
    },
  });
  MentorEspecialidade.belongsTo(models.EspecialidadeModel, {
    foreignKey: {
      allowNull: false,
    },
  });
};
// Exporta o modelo "MentorEspecialidade" para uso em outros lugares.
export default MentorEspecialidade;
