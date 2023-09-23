// Importa o módulo DataTypes do Sequelize para definir tipos de dados dos campos da tabela.
import { DataTypes } from "sequelize";
import UserModel from "./user.mjs";
import DB from "./index.cjs";
const sequelize = DB.sequelize;

const Mentorado = sequelize.define(
  "Mentorado",
  {
    // Define o campo "id" como um inteiro com autoincremento, chave primária e não nulo.
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },

    // Define o campo "nomeCompleto" como uma string não nula.
    nomeCompleto: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Define o campo "dataNascimento" como uma data não nula.
    dataNascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    // Define o campo "telefone" como uma string não nula.
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Foto de Perfil: Uma imagem do mentorado é algo que torna o perfil mais pessoal.
    fotoPerfil: {
      type: DataTypes.STRING, // Você pode armazenar a URL da imagem
      allowNull: true,
    },
    // A área de interesse do mentorado ou seria biografia?
    oQuebusco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Idiomas: Idiomas que o mentorado deseja aprender ou nos quais precisa de orientação.

    // Define o campo "idiomas" como um array de strings que pode ser nulo.
    idiomas: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Idiomas é um array de texto
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserModel,
        key: "id",
      },
    },
    // Define o campo "createdAt" como uma data não nula.
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    // Define o campo "updatedAt" como uma data não nula.
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    // Define o nome da tabela no banco de dados como "mentorado".
    tableName: "mentorado",
  }
);

// Define as associações
Mentorado.associate = function (models) {
  Mentorado.belongsTo(models.User, {
    foreignKey: {
      allowNull: false,
    },
  });

  Mentorado.hasMany(models.Agendamento, {
    foreignKey: {
      allowNull: false,
    },
  });
};

// Exporta o modelo "Mentorado" para uso em outros módulos.
export default Mentorado;
