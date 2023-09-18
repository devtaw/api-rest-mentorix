// Importa o objeto DB, que parece ser um objeto relacionado ao Sequelize.
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
    
    // Define os campos "createdAt" e "updatedAt" do modelo.
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
    // Define o nome da tabela no banco de dados como "mentor_especialidade".
    tableName: "mentor_especialidade",
  }
);

// Define as associações 
MentorEspecialidade.associate = function (models) {

  MentorEspecialidade. belongsTo(MentorModel, {
    foreignKey: {
      allowNull: false,
    },
  });
  MentorEspecialidade.belongsTo(EspecialidadeModel, {
  foreignKey: {
    allowNull: false,
  },
});
};
// Exporta o modelo "MentorEspecialidade" para uso em outros lugares.
export default MentorEspecialidade;
