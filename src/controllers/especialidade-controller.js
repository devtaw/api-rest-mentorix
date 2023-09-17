import express from 'express';
const routes = express.Router;

routes.get ("/", (req, res) => {
    try {
        console.log("get especialidade");
        const listaEspecialidade = [];
        return response.status(200).json(listaEspecialidade);
    } catch (error) {
        return response.status(500).json({
            message: "Erro ao listar especialidades"
        });
    }
});

