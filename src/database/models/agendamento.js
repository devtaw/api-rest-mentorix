// Onde será feito o mapeamento da entidade que está no banco de dados.
//Agendamento
//- mentor: Mentor
//- mentorado: Mentorado
//- assunto: String

import { Sequelize, DataTypes } from "sequelize";


// Entidade "agendamento"
const Agendamento = sequelize.define("Agendamento", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    allowNull: false,
  },

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
Agendamento.belongsTo(User, {
  foreignKey: 'user_id', //chave estrangeira em Agendamento
  as: 'usuario', //
});

// Exporta as entidades
export default  Agendamento ;
