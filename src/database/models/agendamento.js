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
  // Retirar data
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  // Retirar horário
  horário: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  // Retirar local
  local: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Manter esse atributo, mas trocar o nome dele para Mensagem.
  assunto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Retirar esse atributo, pois eles estará associado via 'Associações' feita mais abaixo.
  // Nesse caso foi feita uma referência, mas o ideal é associação para que no service seja possível obter o mentor relacionado ao agendamento.
  // Link sobre esse assunto: https://stackoverflow.com/questions/46305459/sequelize-model-references-vs-associations
  mentor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Mentor,
      key: "id",
    },
  },
  // Retirar esse atributo, pois eles estará associado via 'Associações' feita mais abaixo.
  // Nesse caso foi feita uma referência, mas o ideal é associação para que no service seja possível obter o mentor relacionado ao agendamento.
  // Link sobre esse assunto: https://stackoverflow.com/questions/46305459/sequelize-model-references-vs-associations
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
// Mater a associação no lugar da referência acima.
// Trocar a palavra sessão para agendamento.
// Não podemos colocar palavras com caracteres especiais nessa parte, exemplo: sessão.
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
// Aqui deve exportar apenas o agendamento sem {} e mentor e mentorado.
export { Mentor, Mentorado, Agendamento };
