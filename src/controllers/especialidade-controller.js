import express from "express";
import { EspecialidadeService } from "../services/especialidade-service.js";
import { ServiceError } from "../common/service-error.js";

const routes = express.Router();
const especialidadeService = new EspecialidadeService();

routes.get("/", async (request, response) => {
  try {
    const listaEspecialidade = await especialidadeService.getAllEspecialidades();
    return response.status(200).json(listaEspecialidade);
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      message: "Erro ao listar especialidades",
    });
  }
});

routes.get("/:id", async (request, response) => {
  try {
    const idEspecialidade = request.params.id;
    const especialidade = await especialidadeService.getEspecialidadeById(idEspecialidade);

    return response.status(200).json(especialidade);
  } catch (error) {
    console.error(error);

    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ messagem: error.message });
    }

    return response.status(500).json({
      error: "erro ao listar especialidade",
    });
  }
});

routes.post("/", async (request, response) => {
  try {
    const body = request.body;
    const especialidade = await especialidadeService.addEspecialidade(body);
    return response.status(200).json(especialidade);
  } catch (error) {
    console.error(error);
    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ messagem: error.message });
    }
    return response.status(500).json({
      error: "erro ao cadastrar especialidade",
    });
  }
});

routes.put("/:id", async (request, response) => {
  try {
    const body = request.body;
    const idEspecialidade = request.params.id;
    const especialidadeAtualizada = await especialidadeService.updateEspecialidade(idEspecialidade, body);
    return response.status(200).json(especialidadeAtualizada);
  } catch (error) {
    console.error(error);
    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ messagem: error.message });
    }
    return response.status(500).json({
      error: "Erro ao incluir especialidade",
    });
  }
});

routes.delete("/:id", async (request, response) => {
  try {
    const idEspecialidade = request.params.id;
    await especialidadeService.deleteEspecialidade(idEspecialidade);
    return response.status(204);
  } catch (error) {
    console.error(error);
    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ messagem: error.message });
    }
    return response.status(500).json({
      error: "erro ao deletar especialidade",
    });
  }
});

export const EspecialidadeController = routes;
