import Mentor from "../database/models/mentor.js";
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

routes.post ("/", (req, res) => {
    try{
        const body = request.body;
        console.log("post mentor")
        return response.status(200).json({
            message: 'caiu no endpoint post mentor',
            body,
        });
    } catch (error) {
        return response.status(status).json({error: 'Erro ao cadastrar mentor'});
    }
});

routes.put ("/", (req, res) => {
    try {
        const body= request.body;
        return response.status(200).json({
            message: 'Caiu no endpoint post mentor',
            body,
        });
    } catch (error) {
        return response.status(500).json({error: 'Erro ao incluir mentor'});
    }
});

