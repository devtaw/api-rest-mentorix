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
    return response
      .status(500)
      .json({ mensagem: "Erro ao listar Agendamentos." });
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
    if(error instanceof ServiceError) {
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

routes.post("/", (request, response) => {
  try {
    // obtem os dados do agendamento a ser cadastrado
    const data = request.body;

    console.log("post agendamento");

    // retorna o status 200 (ok) e o json com os dados
    return response.status(200).json({
      message: "Caiu no endpoint post agendamento",
      data, //sugar sintaxe para simplificar a atribuição de propriedade dentro do objeto, seria data:data
    });
  } catch (error) {
    if(error instanceof ServiceError) {
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
routes.put("/:id", (request, response) => {
  try {
    // obtem o id passado na url
    const id = request.params.id;
    // obtem o corpo da requisição (dados do agendamento a ser editado)
    const data = request.body;
    console.log("put agendamento");

    // retorna o status 200 (ok) e o json com os dados
    return response.status(200).json({
      message: "Caiu no endpoint put agendamento by id " + id,
      data, //sugar sintax para simplificar a atribuição de propriedade dentro do objeto, seria data:data
    });
  } catch (error) {
    if(error instanceof ServiceError) {
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
routes.delete("/:id", (request, response) => {
  try {
    // obtem o id passado na url
    const id = request.params.id;
    console.log("put agendamento");

    return response.status(200).json({
      // endpoint cada bloquinho desse delete, delete é um ponto de chamada (requição do verbo http)
      message: "Caiu no endpoint delete area by id " + id,
    });
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
