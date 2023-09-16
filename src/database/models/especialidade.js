import { Sequelize, DataTypes } from "sequelize";

// Cria uma instância do Sequelize e especifica o banco de dados SQLite.


const Especialidade = sequelize.define("Especialidade", {
  // Um identificador único para cada usuário registrado na plataforma.
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
  foto:{
    type: DataTypes.STRING, 
  } 
});

// Associa entidade "Especialidade" com "Área de Atuação", estabelecendo uma relação de 1:1 (um para um).
// A combinação dessa relação com a relação estabelecida no Model/area-atuacao.js cria uma relação de
// 1 "Área de Atuação" possui muitas "Especialidades".
// Referência: https://sequelize.org/docs/v6/core-concepts/assocs/#one-to-many-relationships
Especialidade.belongsTo(sequelize.models.AreaAtuacao, {
  foreignKey: {
    allowNull: false,
  },
});

Especialidade.hasMany(sequelize.models.MentorEspecialidade, {
  foreignKey: {
    allowNull: false,
  },
});



export default Especialidade;
