import express from "express";
import { MentorService } from "../service/mentor-service.js";
const routes = express.Router;
const mentorService = new MentorService();

routes.get("/", async (request, response) => {
  try {
    console.log("get Mentor");
    const listaMentores = [];
    return response.status(200).json(listaMentores);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Erro ao listar mentores." });
  }
});

routes.get("/:id", (request, response) => {
  try {
    const body = request.body;
    const idMentor = request.params.id;
    return response.status(200).json({
      message: "caiu no endpoint get mentor by id" + idMentor,
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      error: "Erro ao listar mentor",
    });
  }
});

routes.post("/", (request, response) => {
  try {
    const body = request.body;
    console.log("post mentor");
    return response.status(200).json({
      message: "caiu no endpoint post mentor",
      body,
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Erro ao cadastrar mentor" });
  }
});

routes.put("/:id", (request, response) => {
  try {
    const body = request.body;
    const idMentor = request.params.id;
    return response.status(200).json({
      message: "Caiu no endpoint put mentor by id" + idMentor,
      body,
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Ocorreu um erro ao atualizar o Agendamento!" });
  }
});

routes.delete("/:id", (request, response) => {
  try {
    const idMentor = request.params.id;
    return response.status(200).json({
      message: "Caiu no endpoint delete by id" + idMentor,
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      error: "erro ao deletar mentor",
    });
  }
});

export const MentorController = routes;
