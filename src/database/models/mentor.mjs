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
import { DataTypes } from "sequelize";
import UserModel from "./user.mjs";
import AreaAtuacaoModel from "./area-atuacao.mjs";
// Importa o objeto DB que contém a configuração da conexão com o banco de dados.
import DB from "./index.cjs";
const sequelize = DB.sequelize;
const Mentor = sequelize.define(
  "Mentor",
  {
    // ID: Identificador único para cada mentor registrado na plataforma.
    id: {
      type: DataTypes.INTEGER, // Tipo de dado para um ID numérico
      primaryKey: true, // Define este campo como chave primária
      autoIncrement: true, // Permite que o valor seja gerado automaticamente
      unique: true,
      allowNull: false,
    },

    // Uma imagem do mentor
    fotoPerfil: {
      type: DataTypes.STRING, // Você pode armazenar a URL da imagem
      allowNull: false,
    },

    // Nome completo: Armazena o nome completo do mentor.
    nomeCompleto: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    profissao: {
      type: DataTypes.STRING,
    },

    linkedin: {
      type: DataTypes.STRING,
    },

    // Biografia: Uma breve descrição do usuário.
    biografia: {
      type: DataTypes.STRING,
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
    // Define o nome da tabela no banco de dados como "area_atuacao".
    tableName: "mentor",
  }
);
// Define as associações
Mentor.associate = function (models) {
  Mentor.belongsTo(models.User, {
    foreignKey: {
      allowNull: false,
    },
  });

  Mentor.hasMany(models.Agendamento, {
    foreignKey: {
      allowNull: false,
    },
  });

  Mentor.hasMany(models.MentorEspecialidade, {
    foreignKey: {
      allowNull: false,
    },
  });
};
// Exporta o modelo "Mentor" para uso em outros módulos.
export default Mentor;
