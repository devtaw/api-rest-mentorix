import express from "express";
import { UserService } from "../services/user-service.js";

const routes = express.Router();
const userService = new UserService();

routes.post("/", (request, response) => {
  try {
    const login = request.body.login;
    const senha = request.body.senha;

    const usuarioAutenticado = userService.autenticar(login, senha);

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
