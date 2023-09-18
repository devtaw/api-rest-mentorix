import { DataTypes } from "sequelize";

// Importa o objeto DB que contém a configuração da conexão com o banco de dados.
import DB from "./index.cjs";
const sequelize = DB.sequelize;
const AreaAtuacao = sequelize.define(
  "User",
  {
        // Define o campo "id" como um inteiro com autoincremento, chave primária e não nulo.
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
  tableName: "user",
}
);

// Define as associações 
AreaAtuacao.associate = function (models) {
User.hasOne(models.Mentor, {
  onDelete: 'CASCADE', // Quando um registro na tabela referenciada é excluído, todos os registros relacionados na tabela atual são excluídos automaticamente.
  onUpdate: 'CASCADE', // Quando a chave primária de um registro na tabela referenciada é atualizada, todos os registros relacionados na tabela atual são atualizados automaticamente.
});

User.hasOne(sequelize.models.Mentorado, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
};

export default User;
