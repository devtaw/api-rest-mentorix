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
