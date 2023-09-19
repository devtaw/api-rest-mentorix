import UserModel from "../database/models/user.mjs";
import { ServiceError } from "../common/service-error.js";

export class UserService {
  async getAllUsers() {
    return UserModel.findAll();
  }

  async getUserById(userId) {
    const user = await UserModel.findByPk(userId);

    if (!user) {
      throw new ServiceError("Usuário não encontrado", 404);
    }

    return user;
  }

  async addUser(userData) {
    if (!userData.email || !userData.email.trim()) {
      throw new ServiceError("Email é obrigatório", 400);
    }

    if (!userData.senha || !userData.senha.trim()) {
      throw new ServiceError("Senha é obrigatória", 400);
    }

    return UserModel.create(userData);
  }

  async updateUser(userId, userData) {
    const user = await UserModel.findByPk(userId);

    if (!user) {
      throw new ServiceError("Usuário não encontrado", 404);
    }

    if (!userData.email || !userData.email.trim()) {
      throw new ServiceError("Email é obrigatório", 400);
    }

    if (!userData.senha || !userData.senha.trim()) {
      throw new ServiceError("Senha é obrigatória", 400);
    }

    return user.update(userData);
  }

  async deleteUser(userId) {
    const user = await UserModel.findByPk(userId);

    if (!user) {
      throw new ServiceError("Usuário não encontrado", 404);
    }

    return user.destroy();
  }
}
