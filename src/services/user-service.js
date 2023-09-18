import { ServiceError } from "../common/service-error";
import UserModel from "../database/models/user.mjs";
export class UserService {
  async getAllUsers() {
    return UserModel.findAll();
  }

  async getUserById(idUser) {
    return UserModel.findByPk(idUser);
  }

  async addUser(dadosUser) {
    return UserModel.create(dadosUser);
  }

  async updateUser(idUser, dadosUser) {
    const user = await UserModel.findByPk(idUser);
    if (!user) {
      throw ServiceError("Usuário não encontrado", 404);
    }

    return user.update(dadosUser);
  }

  async deleteUser(idUser) {
    const user = await UserModel.findByPk(idUser);

    if (!user) {
      throw ServiceError("Usuário não encontrado", 404);
    }

    return user.destroy();
  }
}

// // Método para verificar a senha
// export class UserService {
// verificarSenha(senha) {
// return bcrypt.compareSync(senha, this.senhaCriptografada);
// }
// }
