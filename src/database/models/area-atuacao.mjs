// Responsável: Felipe
// Forma de fazer o modelo sequelize.define: https://sequelize.org/docs/v6/core-concepts/model-basics/

// ID: Tipo de dado - Número (Integer), PK, Obrigatório: Sim, Único, Incremento Automático: Sim, Identificador único para cada área de atuação registrada na plataforma.
// Nome da Área de Atuação: Tipo de dado - Texto(String), Obrigatório: Sim, Armazena o nome das "Áreas de Atuação" presentes na plataforma (por exemplo: Tecnologia, Negócios, Soft Skills).
// Descrição da Área de Atuação: Tipo de dado - Texto (String), Obrigatório: Não, Breve descrição sobre a Área de Atuação.
// Foto da Área de Atuação: Tipo de dado - Imagem (String[onde será colocada uma URL da imagem ou arquivo]), Obrigatório: Não, Uma imagem que faça referência a da Área de Atuação para tornar mais explicativo.

// Associa entidade "Área de Atuação" com "Especialidade", estabelecendo uma relação de 1:N (um para muitos).
// A combinação dessa relação com a relação estabelecida no Model/especialidade.js cria uma relação de
//  muitas "Especialidades" possuem 1 "Área de Atuação".
// Referência: https://sequelize.org/docs/v6/core-concepts/assocs/#one-to-many-relationships
// Importa o módulo DataTypes do Sequelize para definir tipos de dados dos campos da tabela.
import { DataTypes } from "sequelize";

// Importa o objeto DB que contém a configuração da conexão com o banco de dados.
import DB from "./index.cjs";
const sequelize = DB.sequelize;
const AreaAtuacao = sequelize.define(
  "AreaAtuacao",
  {
    // Define o campo "id" como um inteiro com autoincremento, chave primária e não nulo.
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },

    // Define o campo "nome" como uma string não nula.
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
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
    // Define o nome da tabela no banco de dados como "area_atuacao".
    tableName: "area_atuacao",
  }
);

// Define as associações
AreaAtuacao.associate = function (models) {
  AreaAtuacao.hasMany(models.Especialidade, {
    foreignKey: {
      allowNull: false,
    },
  });
};
// Exporta o modelo "AreaAtuacao" para uso em outros módulos.
export default AreaAtuacao;
