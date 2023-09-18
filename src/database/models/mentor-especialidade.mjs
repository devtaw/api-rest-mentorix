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
    // Define o nome da tabela no banco de dados como "mentorepecialidade"
    tableName: "mentor_especialidade",
  }
);

// belongsTo(MentorModel deixar isso em stand by para revisitarmos se vamos importar nesse estilo MentorModel ou se será apenas Mentor
MentorEspecialidade.belongsTo(MentorModel, {
  foreignKey: {
    allowNull: false,
  },
});

MentorEspecialidade.belongsTo(EspecialidadeModel, {
  foreignKey: {
    allowNull: false,
  },
});

export default MentorEspecialidade;
