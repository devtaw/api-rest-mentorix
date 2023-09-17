import express from "express";
import { MentorEspecialidadeService } from "../services/mentorEspecialidade-service.js";

const routes = express.Router();

// Solicitar informações ou recursos do servidor
routes.get("/", async (req, res) => {
  try {
    // Consulta todos os mentorEspecialidade no banco de dados
    const listaMentorEspecialidade =
      await MentorEspecialidadeService.getAllMentorEspecialidade();

    // Retorna a lista de mentorEspecialidade como resposta com status 200 (OK)
    return res.status(200).json(listaMentorEspecialidade);
  } catch (error) {
    // Em caso de erro durante a consulta, retorna uma resposta
    return res
      .status(500).json({ error: "Erro ao listar mentorEspecialidade." });
  }
});

routes.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Busca um mentorEspecialidade pelo ID no banco de dados
    const mentorEspecialidade =
      await MentorEspecialidadeService.getMentorEspecialidadeById(id);

    // Verifica se o mentorEspecialidade foi encontrado
    if (!mentorEspecialidade) {
      // Se não encontrado, retorna uma resposta com status 404 (Não encontrado)
      return res.status(404).json({ error: "Usuário não encontrado." });
    }

    // Retorna o mentorEspecialidade encontrado como resposta com status 200 (OK)
    return res.status(200).json(mentorEspecialidade);
  } catch (error) {
    // Em caso de erro durante a busca, retorna uma resposta com status 500 (Erro interno do servidor)
    return res
      .status(500).json({ error: "Erro ao buscar mentorEspecialidade." });
  }
});

// Rota para cadastrar um novo mentorEspecialidade
routes.post("/", async (req, res) => {
  try {
    const body = req.body;
    const mentorEspecialidade =
      await MentorEspecialidadeService.addMentorEspecialidade(body);
    return res.status(200).json(mentorEspecialidade);
  } catch (error) {
    return res
      .status(500).json({ error: "Erro ao cadastrar mentorEspecialidade." });
  }
});

// Rota para atualizar os dados de um mentorEspecialidade por ID
routes.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const mentorEspecialidade =
      await MentorEspecialidadeService.updateMentorEspecialidade(id, body);

    return res.status(200).json(mentorEspecialidade); // 200 okay
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar mentorEspecialidade." });
  }
});

// Rota para deletar um mentorEspecialidade por ID
routes.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await MentorEspecialidadeService.deleteMentorEspecialidade(id);

    return res.status(204).json(); // 204- sem conteudo
  } catch (error) {
    return res
      .status(500).json({ error: "Erro ao deletar mentorEspecialidade." }); // 500- erro interno do servidor
  }
});

export const MentorEspecialidadeController = routes;
