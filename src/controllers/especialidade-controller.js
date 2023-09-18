import express from "express";
import { EspecialidadeService } from "../service/especialidade-service.js";
const routes = express.Router;
const especialidadeService = new EspecialidadeService();

routes.get("/", async (request, response) => {
  try {
    console.log("get especialidade");
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
    if (!mentorado) {
      return response.status(404).json({ error: "Usuário não encontrado." });
    }
    return response.status(200).json({
      message: "Caiu no endpoint get especialidade by id" + idEspecialidade,
      especialidade,
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      error: "erro ao listar especialidade",
    });
  }
});

routes.post("/", async (request, response) => {
  try {
    const body = request.body;
    const especialidade = await especialidadeService.addEspecialidade(body);
    console.log("post especialidade");
    return response.status(200).json({
      message: "caiu no endpoint post especialidade",
      especialidade,
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      error: "erro ao cadastrar especialidade",
    });
  }
});

routes.put("/:id", async (request, response) => {
  try {
    const body = request.body;
    const idEspecialidade = request.params.id;
    const especialidade = await especialidadeService.updateEspecialidade(idEspecialidade, body);
    return response.status(200).json({
      message: "Caiu no endpoint put especialidade by id" + idEspecialidade,
      especialidade,
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      error: "Erro ao incluir especialidade",
    });
  }
});

routes.delete("/:id", async (request, response) => {
  try {
    const idEspecialidade = request.params.id;
    await especialidadeService.deleteEspecialidade(idEspecialidade);
    console.log("delete especialidade");
    return response.status(204).json({
      message: "Caiu no endpoint delete area by id" + idEspecialidade,
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      error: "erro ao deletar especialidade",
    });
  }
});

export const EspecialidadeController = routes;
