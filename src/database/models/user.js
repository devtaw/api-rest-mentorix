// arquivo salvo como User.js ao inves de login para representar Usuario.Login
import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

// Define a entidade "User" e seus atributos
const User = sequelize.define("User", {
  // Um identificador único para cada usuário registrado na plataforma.
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Permite que o valor seja gerado automaticamente
    unique: true,
    allowNull: false,
  },
  // O endereço de e-mail associado à conta do usuário. Usado para recuperação de senha e comunicações
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  //  Senha associada à conta do usuário. Armazenada de forma segura e criptografada.
  senhaCriptografada: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      // Usamos  bcrypt para criar um hash da senha antes de armazená-la no banco de dados // estudar melhor
      const hashedSenha = bcrypt.hashSync(value, 10); // O valor 10 é o custo da criptografia
      this.setDataValue("senhaCriptografada", hashedSenha);
    },
  },
  // Indica o método de autenticação utilizado, como nome de usuário e senha.
  metodoAutenticacao: {
    type: DataTypes.ENUM(["Nome de Usuário e Senha"]),
    allowNull: false,
  },
  // Indica o método de recuperação de senha usado para redefinir senhas esquecidas.
  recuperacaoSenha: {
    type: DataTypes.ENUM(["E-mail de Recuperação"]),
  },
});

// `sequelize.define` também retorno o modelo
console.log(User === sequelize.models.User); // true

export default User;
