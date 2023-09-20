// CONVERSAR COM O LÉO SOBRE TER APENAS UM VERBO HTTP NO RECURSO AUTENTICAÇÃO (QUE SERVE PARA FAZER O LOGIN),
// POIS NÃO COSTUMA SER NECESSÁRIO MAIS VERBOS PARA AUTENTICAR.

import express from "express";
import { UserService } from "../services/user-service.js";
const routes = express.Router();
const userService = new UserService();

routes.post("/", (request, response) => {
  return response.status(200).json({
    message: "Caiu no endpoint post autenticacao",
  });
});

export const AutenticacaoController = routes;
