// Onde será feito o mapeamento da entidade que está no banco de dados.
//Agendamento
//- mentor: Mentor
//- mentorado: Mentorado
//- assunto: String

import DB from "./index.cjs";
const sequelize = DB.sequelize;
const { DataTypes } = DB.Sequelize;

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
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    },
},
{
  tableName: "Agendamento"
}
);


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
