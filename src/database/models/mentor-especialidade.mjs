// Importa o objeto DB, que parece ser um objeto relacionado ao Sequelize.
import DB from "./index.cjs";
const sequelize = DB.sequelize;
const { DataTypes } = DB.Sequelize;

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
    mentorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    especialidadeID: {
      type: DataTypes.INTEGER,
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
    // Define o nome da tabela no banco de dados como "mentorepecialidade"
    tableName: "mentorepecialidade",
  }
);

export default MentorEspecialidade;
