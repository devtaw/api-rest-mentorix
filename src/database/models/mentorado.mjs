import { Sequelize, DataTypes } from "sequelize";
import Agendamento from "./agendamento";

// Define a entidade Mentorado e seus atributos
const Mentorado = sequelize.define("Mentorado", {
  // Um identificador único para cada mentorado
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Permite que o valor seja gerado automaticamente
    unique: true,
    allowNull: false,
  },
  // O nome do mentorado
  nomeCompleto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataNascimento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  // O email do mentorado
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  // O número de telefone do mentorado
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Senha: Associada à conta do usuário. Armazenada de forma segura e criptografada.
  senhaCriptografada: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      const hashedSenha = bcrypt.hashSync(value, 10);
      this.setDataValue("senhaCriptografada", hashedSenha);
    },f
  },
  // Foto de Perfil: Uma imagem do mentorado é algo que torna o perfil mais pessoal.
  fotoPerfil: {
    type: DataTypes.STRING, // Você pode armazenar a URL da imagem
    allowNull: true,
  },
  // A área de interesse do mentorado ou seria biografia?
  areaInteresse: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Idiomas: Idiomas que o mentorado deseja aprender ou nos quais precisa de orientação.
  idiomas: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Idiomas é um array de texto
    allowNull: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true, // A relacao
  },
});

Mentorado.belongsTo(User, {
  foreignKey: {
    allowNull: false,
  },
});

Mentorado.hasMany(Agendamento, {
  foreignKey: 'agendamento_id', //chave estrangeira em Agendamento
  allowNull: false,
});


// `sequelize.define` também retorno o modelo
console.log(Mentorado === sequelize.models.Mentorado); // true

export default Mentorado;