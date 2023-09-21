import express from "express";
import { MentorEspecialidadeService } from "../services/mentor-especialidade-service.js";

const routes = express.Router();
const mentorEspecialidadeService = new MentorEspecialidadeService();

// Solicitar informações ou recursos do servidor
routes.get("/", async (request, response) => {
  try {
    // Consulta todos os mentorEspecialidade no banco de dados
    const listaMentorEspecialidades = await mentorEspecialidadeService.getAllMentorEspecialidades();

    // Retorna a lista de mentorEspecialidade como resposta com status 200 (OK)
    return response.status(200).json(listaMentorEspecialidades);
  } catch (error) {
    // Em caso de erro durante a consulta, retorna uma resposta
    return response.status(500).json({ error: "Erro ao listar mentorEspecialidade." });
  }
});

routes.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    // Busca um mentorEspecialidade pelo ID no banco de dados
    const mentorEspecialidade = await mentorEspecialidadeService.getMentorEspecialidadeById(id);

    // Verifica se o mentorEspecialidade foi encontrado
    if (!mentorEspecialidade) {
      // Se não encontrado, retorna uma resposta com status 404 (Não encontrado)
      return response.status(404).json({ error: "Usuário não encontrado." });
    }

    // Retorna o mentorEspecialidade encontrado como resposta com status 200 (OK)
    return response.status(200).json(mentorEspecialidade);
  } catch (error) {
    console.error(error);

    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ messagem: error.message });
    }
    // Em caso de erro durante a busca, retorna uma resposta com status 500 (Erro interno do servidor)
    return response.status(500).json({ error: "Erro ao buscar mentorEspecialidade." });
  }
});

// Rota para cadastrar um novo mentorEspecialidade
routes.post("/", async (request, response) => {
  try {
    const body = request.body;
    const mentorEspecialidade = await mentorEspecialidadeService.addMentorEspecialidade(body);
    return response.status(200).json(mentorEspecialidade);
  } catch (error) {
    console.error(error);

    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ messagem: error.message });
    }

    return response.status(500).json({ error: "Erro ao cadastrar mentorEspecialidade." });
  }
});

// Rota para atualizar os dados de um mentorEspecialidade por ID
routes.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const body = request.body;
    const mentorEspecialidade = await mentorEspecialidadeService.updateMentorEspecialidade(id, body);

    return response.status(200).json(mentorEspecialidade); // 200 okay
  } catch (error) {
    console.error(error);

    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ messagem: error.message });
    }

    return response.status(500).json({ error: "Ocorreu um erro ao atualizar o Mentor-Especialidade!" });
  }
});

// Rota para deletar um mentorEspecialidade por ID
routes.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    await mentorEspecialidadeService.deleteMentorEspecialidade(id);

    return response.status(204); // 204- sem conteudo
  } catch (error) {
    console.error(error);

    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ messagem: error.message });
    }

    return response.status(500).json({ error: "Erro ao deletar mentorEspecialidade." }); // 500- erro interno do servidor
  }
});

export const MentorEspecialidadeController = routes;
