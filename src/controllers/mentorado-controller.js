import express from "express";
import { MentoradoService } from "../services/mentorado-service.js";
// TODO: ACRESCENTAR EM TODOS OS CONTROLLERS QUE RETORNARM O SERVICE ERROR
import { ServiceError } from "../common/service-error.js";

const routes = express.Router();
// mentoradoService é uma instância da classe MentoradoService
const mentoradoService = new MentoradoService();

//solicitar informações ou recursos do servidor
routes.get("/", async (request, response) => {
  try {
    // Consulta todos os mentorados no banco de dados
    const listaMentorados = await mentoradoService.getAllMentorados();

    // Retorna a lista de mentorados como resposta com status 200 (OK)
    return response.status(200).json(listaMentorados);
  } catch (error) {
    // Em caso de erro durante a consulta, retorna uma resposta
    return response.status(500).json({ error: "Erro ao listar mentorados." });
  }
});

routes.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    // Busca um mentorado pelo ID no banco de dados
    const mentorado = await mentoradoService.getMentoradoById(id);

    // Verifica se o mentorado foi encontrado
    if (!mentorado) {
      // Se não encontrado, retorna uma resposta com status 404 (Não encontrado)
      return response.status(404).json({ error: "Usuário não encontrado." });
    }

    // Retorna o mentorado encontrado como resposta com status 200 (OK)
    return response.status(200).json(mentorado);
  } catch (error) {
    // Em caso de erro durante a busca, retorna uma resposta com status 500 (Erro interno do servidor)
    return response.status(500).json({ error: "Erro ao buscar mentorado." });
  }
});

// Rota para cadastrar um novo mentorado
routes.post("/", async (request, response) => {
  try {
    const body = request.body;
    const mentorado = await mentoradoService.addMentorado(body);
    return response.status(200).json(mentorado);
  } catch (error) {
    return response.status(500).json({ error: "Erro ao cadastrar mentorado." });
  }
});

// Rota para atualizar os dados de um mentorado por ID
routes.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const body = request.body;
    const mentorado = await mentoradoService.updateMentorado(id, body);

    return response.status(200).json(mentorado);
  } catch (error) {
    // TODO: ACRESCENTAR EM TODOS OS CONTROLLERS QUE RETORNARM O SERVICE ERROR
    if (error instanceof ServiceError) {
      // TODO: verifica se o erro retornado é do tipo service error e retorna 1 erro 400 (erro de validação)
      return response.status(400).json({ error: error.message });
    }

    return response.status(500).json({ error: "Erro ao atualizar mentorado." });
  }
});

// Rota para deletar um mentorado por ID
routes.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    await mentoradoService.deleteMentorado(id);

    return response.status(204).json();
  } catch (error) {
    return response.status(500).json({ error: "Erro ao deletar mentorado." });
  }
});

export const MentoradoController = routes;
