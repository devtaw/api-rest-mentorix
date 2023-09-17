// Responsável: Tawany
// Forma de fazer o modelo sequelize.define: https://sequelize.org/docs/v6/core-concepts/model-basics/

// ID: Tipo de dado - Número (Integer), PK, Obrigatório: Sim, Único, Incremento Automático: Sim, Identificador único para cada mentor registrado na plataforma.
// Mentores ou Mentorados: Tipo de dado - Booleano - Para identificar se o usuário está se cadastrando como mentor ou mentorado.
// Nome completo: Tipo de dado - Texto (String), Obrigatório: Sim, Armazena o nome completo do mentor.
// Data de Nascimento:  Tipo de dado - Data (DATE), Obrigatório: Sim, Armazena a data de nascimento do mentor.
// E-mail: Tipo de dado - Texto (String), Obrigatório: Sim, Único, Armazena o e-mail do mentor.
// Telefone: Tipo de dado - Texto (String), Obrigatório: Sim, Armazena o telefone do mentor.
// Senha: Tipo de dado - Texto (String) - Deve ser armazenada de forma segura, preferencialmente como um hash.
// Foto de Perfil: Tipo de dado - Imagem (URL da imagem ou arquivo), Obrigatório: Não, Uma imagem do mentor é algo que torna o perfil mais pessoal.
// Biografia/Resumo: Tipo de dado - Texto (String) - Uma breve descrição do usuário.
// Nível de Experiência: Tipo de dado - Texto (String) ou Lista de Opções (por exemplo: Júnior, Pleno, Sênior). Obrigatório: Sim, Indica o nível de experiência do mentor em sua área de especialização.
// Experiência Profissional: Tipo de dado - Texto (String), Obrigatório: Sim, Descreve a experiência profissional e especializações do mentor.
// Área de atuação: Tipo de dado - Texto (String) ou Lista de Texto, Obrigatório: Sim, Área de atuação do usuário (por exemplo: Tecnologia, Negócios, Soft Skills).
// Especialidade: Tipo de dado - Lista de Texto ou Lista de Categorias, Obrigatório: Sim, Lista as especialidades que o mentor possuir para oferecer orientação.
// Idiomas: Tipo de dado - Lista de Idiomas ou Texto (String). Obrigatório: Não (recomendado), Idiomas em que o mentor é proficientemente capaz de oferecer orientação.

import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

const Mentor = sequelize.define("Mentor", {
  // Os atributos do modelo são definidos aqui
  // ID: Identificador único para cada mentor registrado na plataforma.
  id: {
    type: DataTypes.INTEGER, // Tipo de dado para um ID numérico
    primaryKey: true, // Define este campo como chave primária
    autoIncrement: true, // Permite que o valor seja gerado automaticamente
    unique: true,
    allowNull: false,
  },
  // Nome completo: Armazena o nome completo do mentor.
  nomeCompleto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataNascimento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  // E-mail: Armazena o e-mail do mentor.
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefone: {
    type: DataTypes.STRING, // Tipo de dado para telefone, pode ser uma string
    allowNull: false,
  },
  // Senha: Associada à conta do usuário. Armazenada de forma segura e criptografada.
  senhaCriptografada: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      // Usamos  bcrypt para criar um hash da senha antes de armazená-la no banco de dados
      const hashedSenha = bcrypt.hashSync(value, 10); // O valor 10 é o custo da criptografia
      this.setDataValue("senhaCriptografada", hashedSenha);
    },
  },
  // Foto de Perfil: Uma imagem do mentor é algo que torna o perfil mais pessoal.
  fotoPerfil: {
    type: DataTypes.STRING, // Você pode armazenar a URL da imagem
  },
  // Biografia: Uma breve descrição do usuário.
  biografia: {
    type: DataTypes.STRING,
  },
  // Nível de Experiência: Indica o nível de experiência do mentor em sua área de especialização.
  nivelExperiencia: {
    type: DataTypes.ENUM("Júnior", "Pleno", "Sênior"),
    allowNull: false,
  },
  // Experiência Profissional: Descreve a experiência profissional e especializações do mentor.
  experienciaProfissional: {
    type: DataTypes.TEXT, // Experiência é um campo de texto
    allowNull: false,
  },
  // Área de atuação: Área de atuação do usuário (por exemplo: Tecnologia, Negócios, Soft Skills).
  areaAtuacao: {
    type: DataTypes.ENUM("Tecnologia", "Negócios", "Soft Skills"), // Área de Atuação como ENUM
    allowNull: false,
  },
  // Especialidade: Lista as especialidades que o mentor possuir para oferecer orientação.
  especialidade: {
    type: DataTypes.ENUM("Especialidade 1", "Especialidade 2", "Especialidade 3"), // Especialidade como ENUM
    allowNull: false,
  },
  // Idiomas: Idiomas em que o mentor é proficientemente capaz de oferecer orientação.
  idiomas: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Idiomas é um array de texto
  },
});
// `sequelize.define` também retorno o modelo
console.log(User === sequelize.models.User); // true

export default Mentor;
