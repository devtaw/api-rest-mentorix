import Mentor from "../database/models/mentor.js";

async function listarMentores(req, res) {
    try {
        const mentores = await Mentor.findAll();
        res.json(mentores);
    } catch (error) {
        res.status(500).json({error: 'Erro ao listar mentores.'});
    }
};

async function criarMentor(req, res) {
    const {nome, especialidade} = req.body;
    try {
        const mentor = await Mentor.create({nome, especialidade});
        res.status(201).json(mentor);
    } catch (error) {
        res.status(500).json({error: 'Erro ao criar mentor.'});
    }
};

