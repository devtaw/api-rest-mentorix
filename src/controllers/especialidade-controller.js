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

routes.get ("/:id", (req, res) => {
    try {
        const body = req.body;
        return response.status(200).json({
            message: "Caiu no endpoint get especialidade by id" + id
        })
    } catch (error) {
        return response.status(500).json ({
            error: 'erro ao listar especialidade'
        });
    }
});
