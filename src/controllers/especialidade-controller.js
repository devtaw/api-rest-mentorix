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

routes.post ("/", (req, res) => {
    try {
        const body = req.body;
        console.log('post especialidade');
        return response.status(200).json({
            message: 'caiu no endpoint post especialidade'
        });
    } catch (error) {
        return response.status(500).json({
            error: 'erro ao cadastrar especialidade'
        });
    }
});

routes.put ("/:id", (req, res) => {
   try {
    const body = req.body;
    const idEspecialidade = req.params.id;
    return response.status(200).json({
        message: 'Caiu no endpoint put especialidade by id' + idEspecialidade
    });
   } catch (error) {
    return response.status(500).json({
        error: 'Erro ao incluir especialidade'
    });
   }
});
