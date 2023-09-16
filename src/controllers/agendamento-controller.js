// import { AgendamentoService } from "../services/agendamento-service.js";

import express from "express";
const routes = express.Router();

// const agendamentoService = new AgendamentoService();
/**
 * Define uma rota GET (http://localhost:3000/agendamento/) para obter todos os agendamentos
 *
 * Exemplo de chamada: (GET) http://localhost:3000/agendamento
 */
routes.get("/", async (request, response) => {
  try {
    console.log("get agendamento");
    // apenas um exemplo de retorno, pode ser de um banco de dados, uma api, um service, etc.
    const listaDeAgendamentos = [
      {
        id: 1,
        nome: "Agendamento 1",
      },
      {
        id: 2,
        nome: "Agendamento 2",
      },
      {
        id: 3,
        nome: "Agendamento 3",
      },
    ];

    // retorna o status 200 (ok) e o json com os dados
    return response.status(200).json(listaDeAgendamentos);
  } catch (error) {
    /**
     * Caso houver qualquer tipo de erro na execução, retorna o status 500 (erro interno do servidor) e o json com a mensagem de erro
     */
    return response.status(500).json({ mensagem: "Erro ao listar Agendamentos." });
  }
});

/**
 * Define uma rota GET para obter um agendamento específico com base no id passado na url
 *  Exemplo de chamada: (GET) http://localhost:3000/agendamento/123
 */
routes.get("/:id", (request, response) => {
  try {
    const id = request.params.id;

    console.log("get agendamento");

    // retorna o status 200 (ok) e o json com os dados
    return response.status(200).json({
      message: "Caiu no endpoint get agendamento by id " + id,
    });
  } catch (error) {
    /**
     * Caso houver qualquer tipo de erro na execução, retorna o status 500 (erro interno do servidor) e o json com a mensagem de erro
     */
    return response
      .status(500).json({ mensagem: "Erro ao listar Agendamento." });
  }
});
