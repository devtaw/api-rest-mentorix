import AreaAtuacaoModel from "./area-atuacao.mjs";
import { DataTypes } from "sequelize";
import DB from "./index.cjs";
const sequelize = DB.sequelize;

const Especialidade = sequelize.define(
  "Especialidade",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // Permite que o valor seja gerado automaticamente
      unique: true,
      allowNull: false,
    },

    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    descricao: {
      type: DataTypes.TEXT,
    },

    foto: {
      type: DataTypes.STRING,
    },

    area_atuacao_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: AreaAtuacaoModel,
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
    tableName: "especialidade",
  }
);

Especialidade.associate = function (models) {
  Especialidade.belongsTo(models.AreaAtuacao, {
    foreignKey: {
      allowNull: false,
    },
  });
  Especialidade.hasMany(models.MentorEspecialidade, {
    foreignKey: {
      allowNull: false,
    },
  });
};

export default Especialidade;
