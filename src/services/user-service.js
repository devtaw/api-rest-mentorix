import { ServiceError } from "../common/service-error.js";
import UserModel from "../database/models/user.mjs";
export class UserService {
  async getAllUsers() {
    return UserModel.findAll();
  }

  async getUserById(idUser) {
    const user = UserModel.findByPk(idUser);
    if (!user) {
      throw new ServiceError("User não encontrado", 404);
    }
    return user;
  }

  async addUser(dadosUser) {
    if (!dadosUser.email || !dadosUser.email.trim()) {
      throw new ServiceError("Email é obrigatório", 400);
    }

    return UserModel.create(dadosUser);
  }

  async updateUser(idUser, dadosUser) {
    const user = await UserModel.findByPk(idUser);
    if (!user) {
      throw new ServiceError("User não encontrada", 404);
    }

    if (!dadosUser.senha || !dadosUser.senha.trim()) {
      throw new ServiceError("Email é obrigatório", 400);
    }

    return user.update(dadosUser);
  }

  async deleteUser(idUser) {
    const user = await UserModel.findByPk(idUser);

    if (!user) {
      throw new ServiceError("Usuário não encontrado", 404);
    }

    return user.destroy();
  }
}

// Método para verificar a senha
// export class UserService {
// verificarSenha(senha) {
// return bcrypt.compareSync(senha, this.senhaCriptografada);
// }
// }
