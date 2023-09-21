import express from "express";
import { MentoradoService } from "../services/mentorado-service.js"; // Note que agora estamos importando o serviço de mentorado
import { ServiceError } from "../common/service-error.js";

const routes = express.Router();
const mentoradoService = new MentoradoService(); // Agora estamos utilizando o serviço de mentorado

routes.get("/", async (request, response) => {
  try {
    const listaMentorados = await mentoradoService.getAllMentorados(); // Corrigindo o nome do serviço
    return response.status(200).json(listaMentorados);
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      message: "Erro ao listar mentorados",
    });
  }
});

routes.get("/:id", async (request, response) => {
  try {
    const idMentorado = request.params.id;
    const mentorado = await mentoradoService.getMentoradoById(idMentorado); // Corrigindo o nome do serviço

    return response.status(200).json(mentorado);
  } catch (error) {
    console.error(error);

    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ message: error.message }); // Corrigindo a propriedade 'messagem' para 'message'
    }

    return response.status(500).json({
      error: "Erro ao listar mentorado",
    });
  }
});

routes.post("/", async (request, response) => {
  try {
    const body = request.body;
    const mentorado = await mentoradoService.addMentorado(body); // Corrigindo o nome do serviço
    return response.status(200).json(mentorado); // ;Corrigindo o nome do objeto retornado
  } catch (error) {
    console.error(error);
    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ message: error.message }); // Corrigindo a propriedade 'messagem' para 'message'
    }
    return response.status(500).json({
      error: "Erro ao cadastrar mentorado",
    });
  }
});

routes.put("/:id", async (request, response) => {
  try {
    const body = request.body;
    const idMentorado = request.params.id;
    const mentorado = await mentoradoService.updateMentorado(idMentorado, body); // Corrigindo o nome do serviço
    return response.status(200).json(mentorado);
  } catch (error) {
    console.error(error);
    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ message: error.message }); // Corrigindo a propriedade 'messagem' para 'message'
    }
    return response.status(500).json({ error: "Ocorreu um erro ao atualizar o Mentorado!" });
  }
});

routes.delete("/:id", async (request, response) => {
  try {
    const idMentorado = request.params.id;
    await mentoradoService.deleteMentorado(idMentorado); // Corrigindo o nome do serviço
    return response.status(204);
  } catch (error) {
    console.error(error);
    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ message: error.message }); // Corrigindo a propriedade 'messagem' para 'message'
    }
    return response.status(500).json({
      error: "Erro ao deletar mentorado",
    });
  }
});

export const MentoradoController = routes; // Corrigindo o nome da exportação
