import express from "express";
import { ServiceError } from "../common/service-error.js";
import { UserService } from "../services/user-service.js";

const routes = express.Router();
const userService = new UserService();

routes.post("/", async (request, response) => {
  try {
    const email = request.body.email;
    const senha = request.body.senha;

    const usuarioAutenticado = await userService.autenticar(email, senha);

    return response.status(200).json(usuarioAutenticado);
  } catch (error) {
    console.error(error);

    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ messagem: error.message });
    }

    return response
      .status(500)
      .json({ error: "Ocorreu um erro ao autenticar o usuário!" });
  }
});

export const AutenticacaoController = routes;
