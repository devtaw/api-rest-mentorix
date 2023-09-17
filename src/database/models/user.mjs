// Importa o objeto DB, que parece ser um objeto relacionado ao Sequelize.
import DB from "./index.cjs";
const sequelize = DB.sequelize;
const { DataTypes } = DB.Sequelize;

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

  // Senha associada à conta do usuário. Armazenada de forma segura e criptografada.
  senhaCriptografada: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      // Usamos bcrypt para criar um hash da senha antes de armazená-la no banco de dados.
      const hashedSenha = bcrypt.hashSync(value, 10); // O valor 10 refere-se ao número de iterações usadas para calcular o hash da senha.
      this.setDataValue("senhaCriptografada", hashedSenha);
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
},
{
  tableName: "user"
}
);

// Define as associações da entidade User com as entidades Mentor e Mentorado
User.hasOne(sequelize.models.Mentor, {
  onDelete: 'CASCADE', // Quando um registro na tabela referenciada é excluído, todos os registros relacionados na tabela atual são excluídos automaticamente.
  onUpdate: 'CASCADE', // Quando a chave primária de um registro na tabela referenciada é atualizada, todos os registros relacionados na tabela atual são atualizados automaticamente.
});

User.hasOne(sequelize.models.Mentorado, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

// `sequelize.define` também retorna o modelo
console.log(User === sequelize.models.User); // true

export default User;
