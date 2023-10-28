import express from "express";
import { MentorService } from "../services/mentor-service.js";
import { ServiceError } from "../common/service-error.js";
import { authMiddleware } from "../common/auth.middleware.js";

const routes = express.Router();
const mentorService = new MentorService();
routes.get("/", async (request, response) => {
  try {
    const listaMentores = await mentorService.getAllMentores();
    return response.status(200).json(listaMentores);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Erro ao listar mentores." });
  }
});

routes.get("/:id", authMiddleware, async (request, response) => {
  try {
    const idMentor = request.params.id;

    const mentor = await mentorService.getMentorById(idMentor);
    return response.status(200).json(mentor);
  } catch (error) {
    console.error(error);
    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ messagem: error.message });
    }
    return response.status(500).json({
      error: "Erro ao listar mentor",
    });
  }
});

routes.post("/", authMiddleware, async (request, response) => {
  try {
    const body = request.body;

    const mentor = await mentorService.addMentor(body);
    return response.status(200).json(mentor);
  } catch (error) {
    console.error(error);
    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ messagem: error.message });
    }
    return response.status(500).json({ error: "Erro ao cadastrar mentor" });
  }
});

routes.put("/:id", authMiddleware, async (request, response) => {
  try {
    const body = request.body;
    const idMentor = request.params.id;
    const mentorAtualizado = await mentorService.updateMentor(idMentor, body);
    return response.status(200).json(mentorAtualizado);
  } catch (error) {
    console.error(error);
    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ messagem: error.message });
    }

    return response.status(500).json({ error: "Ocorreu um erro ao atualizar Mentor" });
  }
});

routes.delete("/:id", authMiddleware, async (request, response) => {
  try {
    const idMentor = request.params.id;

    await mentorService.deleteMentor(idMentor);
    return response.status(204);
  } catch (error) {
    console.error(error);
    if (error instanceof ServiceError) {
      return response.status(error.errorCode).json({ messagem: error.message });
    }
    return response.status(500).json({
      error: "erro ao deletar mentor",
    });
  }
});
export const MentorController = routes;
