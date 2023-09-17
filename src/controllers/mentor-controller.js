import {Mentor} from "../service/mentor-service.js";
const routes = express.Router();

routes.get ("/", async (req, res) => {
    try {
        console.log("get Mentor");
        const listaMentores = [];
        return response.status(200).json(listaMentores);
    } catch (error) {
        return response.status(500).json({error: 'Erro ao listar mentores.'});
    }
});

routes.get ("/:id", (req, res) => {
    try {
        const body = req.body; 
        const idMentor = req.params.id;
        return response.status(200).json({
            message: "caiu no endpoint get mentor by id" + idMentor
        })
    } catch (error) {
        return response.status(500).json({
            error: "Erro ao listar mentor"
        });
    }
});

routes.post ("/", (req, res) => {
    try{
        const body = request.body;
        console.log("post mentor")
        return response.status(200).json({
            message: 'caiu no endpoint post mentor',
            body,
        });
    } catch (error) {
        return response.status(500).json({error: 'Erro ao cadastrar mentor'});
    }
});

routes.put ("/:id", (req, res) => {
    try {
        const body= request.body;
        const idMentor = req.params.id;
        return response.status(200).json({
            message: 'Caiu no endpoint put mentor by id' + idMentor,
            body,
        });
    } catch (error) {
        return response.status(500).json({error: 'Erro ao incluir mentor'});
    }
});

routes.delete("/:id", (req, res) => {
    try {
        const idMentor = req.params.id;
        return response.status(200).json({
            message: 'Caiu no endpoint delete by id' + idMentor
        })
    } catch (error) {
        return response.status(500).json({
            error: 'erro ao deletar mentor'
        });
    }
});

export const mentorController = routes;


