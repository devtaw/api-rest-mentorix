import express from "express";
import { MentoradoService } from "../services/mentorado-service.js"; // Note que agora estamos importando o serviço de mentorado
import { ServiceError } from "../common/service-error.js";

const routes = express.Router();
const mentoradoService = new MentoradoService(); // Agora estamos utilizando o serviço de mentorado

routes.get("/", async (request, response) => {
  try {
    console.log("get mentorado");
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
    if (!mentorado) {
      return response.status(404).json({ error: "Usuário não encontrado." });
    }
    return response.status(200).json({
      message: "Caiu no endpoint get mentorado by id" + idMentorado,
      mentorado, // Corrigindo o nome do objeto retornado
    });
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
    console.log("post mentorado");
    return response.status(200).json({
      message: "Caiu no endpoint post mentorado",
      mentorado, // Corrigindo o nome do objeto retornado
    });
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
    return response.status(200).json({
      message: "Caiu no endpoint put mentorado by id" + idMentorado,
      mentorado, // Corrigindo o nome do objeto retornado
    });
  } catch (error) {
    console.error(error);
    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ message: error.message }); // Corrigindo a propriedade 'messagem' para 'message'
    }
    return response.status(500).json({
      error: "Erro ao incluir mentorado",
    });
  }
});

routes.delete("/:id", async (request, response) => {
  try {
    const idMentorado = request.params.id;
    await mentoradoService.deleteMentorado(idMentorado); // Corrigindo o nome do serviço
    console.log("delete mentorado");
    return response.status(204).json({
      message: "Caiu no endpoint delete mentorado by id" + idMentorado,
    });
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
