// import { AgendamentoService } from "../services/agendamento-service.js";

import express from "express";
import { AgendamentoService } from "../services/agendamento-service.js";
import { ServiceError } from "../common/service-error.js";
const routes = express.Router();
const agendamentoService = new AgendamentoService();

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
    const listaDeAgendamentos = await agendamentoService.getAllAgendamentos();
    // retorna o status 200 (ok) e o json com os dados
    return response.status(200).json(listaDeAgendamentos);
  } catch (error) {
    /**
     * Caso houver qualquer tipo de erro na execução, retorna o status 500 (erro interno do servidor) e o json com a mensagem de erro
     */
    return response
      .status(500)
      .json({ mensagem: "Erro ao listar Agendamentos." });
  }
});

/**
 * Define uma rota GET para obter um agendamento específico com base no id passado na url
 *  Exemplo de chamada: (GET) http://localhost:3000/agendamento/123
 */
routes.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const agendamento = await agendamentoService.getAgendamentosById(id);

    // retorna o status 200 (ok) e o json com os dados
    return response.status(200).json(agendamento);
  } catch (error) {
    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ mensagem: error.message });
    }
    /**
     * Caso houver qualquer tipo de erro na execução, retorna o status 500 (erro interno do servidor) e o json com a mensagem de erro
     */
    return response
      .status(500)
      .json({ mensagem: "Erro ao listar Agendamento." });
  }
});

/**
 * Define uma rota POST (http://localhost:3000/agendamento) para cadastrar um novo agendamento
 *
 * neste caso, o body da requisição deve conter os dados do agendamento a ser cadastrado
 */

routes.post("/", async (request, response) => {
  try {
    // obtem os dados do agendamento a ser cadastrado
    const data = request.body;

    const novoAgendamento = await agendamentoService.addAgendamento(data); //

    // retorna o status 200 (ok) e o json com os dados
    return response.status(200).json(novoAgendamento); // return
  } catch (error) {
    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ mensagem: error.message });
    }
    /**
     * Caso houver qualquer tipo de erro na execução, retorna o status 500 (erro interno do servidor) e o json com a mensagem de erro
     */
    return response
      .status(500)
      .json({ mensagem: "Erro ao cadastrar Agendamento." });
  }
});

/**
 * Define uma rota PUT (http://localhost:3000/agendamento) para editar um agendamento específico
 *
 * :id representa um parâmetro da rota, ou seja, pode ser qualquer valor
 *
 * Exemplo de chamada: (PUT) http://localhost:3000/agendamento/123
 */
routes.put("/:id", async (request, response) => {
  try {
    // obtem o id passado na url
    const id = request.params.id;
    // obtem o corpo da requisição (dados do agendamento a ser editado)
    const data = request.body;
    const agedamentoAtualizado = await agendamentoService.updateAgendamento(
      id,
      data
    );

    // retorna o status 200 (ok) e o json com os dados
    return response.status(200).json(agedamentoAtualizado); //
  } catch (error) {
    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ mensagem: error.message });
    }
    /**
     * Caso houver qualquer tipo de erro na execução,retorna o status 500 (erro interno do servidor) e o json com a mensagem de erro
     */
    return response
      .status(500)
      .json({ mensagem: "Erro ao incluir Agendamento." });
  }
});

/**
 * Define uma rota DELETE (http://localhost:3000/agendamento) para deletar um agendamento específico
 *
 * Exemplo de chamada: (DELETE) http://localhost:3000/agendamento/123
 */
routes.delete("/:id", async (request, response) => {
  try {
    // obtem o id passado na url
    const id = request.params.id;
    const agendamentoDeletado = await agendamentoService.deleteAgendamento(id);

    return response.status(200).json(agendamentoDeletado);
  } catch (error) {
    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ mensagem: error.message });
    }
    return response
      .status(500)
      .json({ mensagem: "Erro ao deletar Agendamento." });
  }
});

export const AgendamentoController = routes;
