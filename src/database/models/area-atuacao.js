
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

import sequelize from "sequelize";
const sequelize = new sequelize("sqlite::memory:");

module.exports = (sequelize, DataTypes) => {
  const areaAtuacao = sequelize.define('areaAtuacao', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricaoArea: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fotoArea: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};

AreaAtuacao.hasMany(sequelize.models.Especialidade, {
  foreignKey: {
    allowNull: false,
  },
});
