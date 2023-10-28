import express from "express";
import { ServiceError } from "../common/service-error.js";
import { UserService } from "../services/user-service.js";
const routes = express.Router();
const userService = new UserService();

routes.get("/", async (request, response) => {
  try {
    const [, hash] = Buffer.from(request.headers.authorization.split(" ")).toString().split(".");
    const [email, password] = Buffer.from(hash, "base64").toString().split(":");

    const { user, token } = await userService.autenticar(email, password);

    return response.status(200).json({
      data: { user, token },
    });
  } catch (error) {
    console.error(error);

    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ messagem: error.message });
    }
    return response.status(500).json({ error: "Ocorreu um erro ao autenticar o usuário!" });
  }
});
export const AutenticacaoController = routes;
