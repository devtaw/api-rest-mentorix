import UserModel from "../database/models/user.mjs";
import MentorModel from "../database/models/mentor.mjs";
import { ServiceError } from "../common/service-error.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

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
    if (!userData.senhaCriptografada || !userData.senhaCriptografada.trim()) {
      throw new ServiceError("Senha é obrigatória", 400);
    }
    const userAlreadyExists = await UserModel.findAll({
      where: {
        email: userData.email,
      },
    });
    if (userAlreadyExists?.length) {
      throw new ServiceError("User already exists", 400);
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

  async autenticar(email, senha) {
    const user = await UserModel.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new ServiceError("Usuário não encontrado", 404);
    }

    const senhaCriptografada = bcrypt.hashSync(senha, 10);
    if (!user.senhaCriptografada === senhaCriptografada) {
      throw new ServiceError("Senha inválida", 401);
    }

    const secretLocal = "mentorix-secret";

    const token = jsonwebtoken.sign({ user: JSON.stringify(user) }, process.env.JWT_SECRET || secretLocal, {
      expiresIn: "4h",
    });

    const mentor = await MentorModel.findOne({
      where: {
        user_id: user.id,
      },
    }).then((data) => data?.dataValues);

    console.log("========== mentor: ", mentor);

    return { user, token, mentor_id: mentor?.id };
  }
}
