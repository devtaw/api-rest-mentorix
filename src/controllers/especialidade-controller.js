import express from 'express';
import { EspecialidadeService } from "../service/especialidade-service.js";
const routes = express.Router;

routes.get ("/", (request, response) => {
    try {
        console.log("get especialidade");
        const listaEspecialidade = [];
        return response.status(200).json(listaEspecialidade);
    } catch (error) {
        console.error(error);
        return response.status(500).json({
            message: "Erro ao listar especialidades"
        });
    }
});

routes.get ("/:id", (request, response) => {
    try {
        const body = request.body;
        return response.status(200).json({
            message: "Caiu no endpoint get especialidade by id" + id
        })
    } catch (error) {
        console.error(error);
        return response.status(500).json ({
            error: 'erro ao listar especialidade'
        });
    }
});

routes.post ("/", (request, response) => {
    try {
        const body = request.body;
        console.log('post especialidade');
        return response.status(200).json({
            message: 'caiu no endpoint post especialidade'
        });
    } catch (error) {
        console.error(error);
        return response.status(500).json({
            error: 'erro ao cadastrar especialidade'
        });
    }
});

routes.put ("/:id", (request, response) => {
   try {
    const body = request.body;
    const idEspecialidade = request.params.id;
    return response.status(200).json({
        message: 'Caiu no endpoint put especialidade by id' + idEspecialidade
    });
   } catch (error) {
    console.error(error);
    return response.status(500).json({
        error: 'Erro ao incluir especialidade'
    });
   }
});

routes.delete ("/:id", (request, response) => {
    try {
        const idEspecialidade = request.params.id;
        console.log("delete especialidade");
        return response.status(200).json ({
            message: "Caiu no endpoint delete area by id" + idEspecialidade
        });
    } catch (error) {
        console.error(error);
        return response.status(500).json ({
            error: 'erro ao deletar especialidade'
        });
    }
});

export const EspecialidadeController = routes;