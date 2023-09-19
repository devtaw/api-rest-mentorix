import { ServiceError } from "../common/service-error.js";
import { AreaAtuacaoService } from "../services/area-atuacao-service.js";
import express from "express";
const routes = express.Router();
const areaAtuacaoService = new AreaAtuacaoService();

// Cada uma das entidades deve realizar todos os métodos HTTP:
// ● GET - Para listar os cadastros;
// ● GET - Para buscar os dados de um cadastro específico com base em um de seus atributos (ID/Código, por exemplo).
// ● POST - Para incluir um novo cadastro;
// ● PUT/PATCH - Para editar os cadastros;
// ● DELETE - Para remover um cadastro;

/**
 * Define uma rota GET (http://localhost:3000/area/) para obter todas as areas
 *
 * Exemplo de chamada: (GET) http://localhost:3000/area
 */
routes.get("/", async (request, response) => {
  try {
    console.log("get area");
    // apenas um exemplo de retorno, pode ser de um banco de dados, uma api, um service, etc.
    const listaDeAreas = await areaAtuacaoService.getAllAreas();

    // retorna o status 200 (ok) e o json com os dados
    return response.status(200).json(listaDeAreas);
  } catch (error) {
    console.error(error);
    /**
     * Caso houver qualquer tipo de erro na execução,
     * retorna o status 500 (erro interno do servidor) e o json com a mensagem de erro
     *
     * pode mudar no futuro dependendo na Regra de Negócio
     */
    return response.status(500).json({ mensagem: "Erro ao listar Áreas." });
  }
});

/**
 * Define uma rota GET para obter uma area específica
 * com base no id passado na url
 *
 * :id representa um parâmetro da rota, ou seja, pode ser qualquer valor
 *
 *  Exemplo de chamada: (GET) http://localhost:3000/area/123
 */
routes.get("/:id", async (request, response) => {
  try {
    // obtem o id passado na url
    const id = request.params.id;
    const areaAtuacao = await areaAtuacaoService.getAreaById(id);

    // retorna o status 200 (ok) e o json com os dados
    return response.status(200).json(areaAtuacao);
  } catch (error) {
    console.error(error);
    /**
     * Caso houver qualquer tipo de erro na execução,
     * retorna o status 500 (erro interno do servidor) e o json com a mensagem de erro
     *
     * pode mudar no futuro dependendo na Regra de Negócio
     */
    return response.status(500).json({ mensagem: "Erro ao listar Área." });
  }
});

/**
 * Define uma rota POST (http://localhost:3000/area) para cadastrar uma nova área
 *
 * neste caso, o body da requisição deve conter os dados da área a ser cadastrada
 *
 * Exemplo de body:
 * {
 *   "nome": "Área 1"
 * }
 *
 * Exemplo de chamada: (POST) http://localhost:3000/area
 */
routes.post("/", async (request, response) => {
  try {
    // obtem os dados da área a ser cadastrada
    const data = request.body;
    const newAreaAtuacao = await areaAtuacaoService.addArea(data);

    // retorna o status 200 (ok) e o json com os dados
    return response.status(200).json(newAreaAtuacao);
  } catch (error) {
    console.error(error);
    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ mensagem: error.message });
    }
    /**
     * Caso houver qualquer tipo de erro na execução,
     * retorna o status 500 (erro interno do servidor) e o json com a mensagem de erro
     *
     * pode mudar no futuro dependendo na Regra de Negócio
     */
    return response.status(500).json({ mensagem: "Erro ao cadastrar Área." });
  }
});

/**
 * Define uma rota PUT (http://localhost:3000/area) para editar uma área específica
 *
 * :id representa um parâmetro da rota, ou seja, pode ser qualquer valor
 *
 * Exemplo de chamada: (PUT) http://localhost:3000/area/123
 */
routes.put("/:id", async (request, response) => {
  try {
    // obtem o id passado na url
    const id = request.params.id;
    // obtem o corpo da requisição (dados da área a ser editada)
    const data = request.body;
    const areaAtuacao = await areaAtuacaoService.updateArea(id, data);

    // retorna o status 200 (ok) e o json com os dados
    return response.status(200).json(areaAtuacao);
  } catch (error) {
    console.error(error);
    /**
     * Caso houver qualquer tipo de erro na execução,
     * retorna o status 500 (erro interno do servidor) e o json com a mensagem de erro
     *
     * pode mudar no futuro dependendo na Regra de Negócio
     */
    return response.status(500).json({ mensagem: "Erro ao incluir Área." });
  }
});

/**
 * Define uma rota DELETE (http://localhost:3000/area) para deletar uma área específica
 *
 * Exemplo de chamada: (DELETE) http://localhost:3000/area/123
 */
routes.delete("/:id", async (request, response) => {
  try {
    // obtem o id passado na url
    const id = request.params.id;
    const areaDeletada = await areaAtuacaoService.deleteArea(id);

    return response.status(200).json(areaDeletada);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ mensagem: "Erro ao deletar Área." }); //pode mudar no futuro dependendo na Regra de Negócio
  }
});

export const AreaAtuacaoController = routes;
