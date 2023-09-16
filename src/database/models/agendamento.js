// Onde será feito o mapeamento da entidade que está no banco de dados.
//Agendamento
//- mentor: Mentor
//- mentorado: Mentorado
//- assunto: String

import { Sequelize, DataTypes } from "sequelize";

// Cria uma instância do Sequelize e especifica o banco de dados SQLite.
const sequelize = new Sequelize("sqlite::memory:");

// Entidade "agendamento"
const Agendamento = sequelize.define("Agendamento", {
  campo_mensagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  aceite: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});


// Associações
Agendamento.belongsTo(Mentor, {
  foreignKey: {
    allowNull: false,
  },
});

Agendamento.belongsTo(Mentorado, {
  foreignKey: {
    allowNull: false,
  },
});

// Exporta as entidades
export default  Agendamento ;
