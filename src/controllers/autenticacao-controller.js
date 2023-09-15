// CONVERSAR COM O LÉO SOBRE TER APENAS UM VERBO HTTP NO RECURSO AUTENTICAÇÃO (QUE SERVE PARA FAZER O LOGIN),
// POIS NÃO COSTUMA SER NECESSÁRIO MAIS VERBOS PARA AUTENTICAR.

import express from "express";
const routes = express.Router();

routes.post("/", (request, response) => {
  console.log("get autenticacao");
  return response.status(200).json({
    message: "Caiu no endpoint post autenticacao",
  });
});

export const AutenticacaoController = routes;
