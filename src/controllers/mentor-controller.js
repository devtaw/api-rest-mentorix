import Mentor from "../database/models/mentor.js";

async function listarMentores(req, res) {
    try {
        const mentores = await Mentor.findAll();
        res.json(mentores);
    } catch (error) {
        res.status(500).json({error: 'Erro ao listar mentores.'});
    };
};

