// Onde será feito o mapeamento da entidade que está no banco de dados.
//Sessão
//- mentor: Mentor
//- mentorado: Mentorado
//- data: Date
//- horário: Time
//- local: String
//- assunto: String

import { Sequelize, DataTypes } from "sequelize";

// Cria uma instância do Sequelize e especifica o banco de dados SQLite.
const sequelize = new Sequelize("sqlite::memory:");


// Entidade "agendamento"
const Agendamento = sequelize.define("Agendamento", {
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  horário: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  local: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  assunto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mentor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Mentor,
      key: "id",
    },
  },
  mentorado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Mentorado,
      key: "id",
    },
  },
});

// Associações 
Sessão.belongsTo(Mentor, {
  foreignKey: {
    allowNull: false,
  },
});

Sessão.belongsTo(Mentorado, {
  foreignKey: {
    allowNull: false,
  },
});

// Exporta as entidades
export { Mentor, Mentorado, Agendamento };