// Id: Tipo de dado - INTEGER
// Nome completo: Tipo de dado - Texto (String)
// E-mail: Tipo de dado - Texto (String)
// Senha: Tipo de dado - Texto (String) - Deve ser armazenada de forma segura, preferencialmente como um hash.
// Foto de Perfil: Tipo de dado - Imagem (URL da imagem ou arquivo)
// Biografia/Resumo: Tipo de dado - Texto (String) - Uma breve descrição do usuário.
// Especialização: Tipo de dado - Texto (String) - Área de especialização do usuário (por exemplo, tecnologia, negócios, soft skills).
// Categoria: Tipo de dado - Texto (String) - Para categorizar a área de especialização (por exemplo, "Tecnologia" e "Lógica da Programação").
// Mentores ou Mentorados: Tipo de dado - Booleano - Para identificar se o usuário está se cadastrando como mentor ou mentorado.
// Forma de fazer o modelo sequelize.define: https://sequelize.org/docs/v6/core-concepts/model-basics/

import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

const Cadastro = sequelize.define("Cadastro", {
  // Os atributos do modelo são definidos aqui
  id: {
    type: DataTypes.INTEGER, // Tipo de dado para um ID numérico
    primaryKey: true, // Define este campo como chave primária
    autoIncrement: true, // Permite que o valor seja gerado automaticamente
  },
  nomeCompleto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fotoPerfil: {
    type: DataTypes.STRING, // Você pode armazenar a URL da imagem
  },
  biografia: {
    type: DataTypes.STRING,
  },
  especializacao: {
    type: DataTypes.STRING,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mentoresMentorados: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});
// `sequelize.define` também retorno o modelo
console.log(User === sequelize.models.User); // true

module.exports = Cadastro;
