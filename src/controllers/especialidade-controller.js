import express from 'express';
const routes = express.Router;

routes.get ("/", (req, res) => {
    try {
        console.log("get especialide");
        const listaEspecialide = [];
        return response.status(200).json(listaEspecialide);
    } catch (error) {
        return response.status(500).json({
            message: "Erro ao listar especialidades"
        });
    }
});

