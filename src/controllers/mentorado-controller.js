import express from 'express';
import {MentoradoService} from '../services/mentorado-service.js';

const routes = express.Router();

//solicitar informações ou recursos do servidor
routes.get('/', async (req, res) => {
    try {
        // Consulta todos os mentorados no banco de dados
        const listaMentorados = await MentoradoService.getAllMentorados();

        // Retorna a lista de mentorados como resposta com status 200 (OK)
        return res.status(200).json(listaMentorados);
    } catch (error) {
        // Em caso de erro durante a consulta, retorna uma resposta
        return res.status(500).json({ error: 'Erro ao listar mentorados.' });
    }
});

routes.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Busca um mentorado pelo ID no banco de dados
        const mentorado = await MentoradoService.getMentoradoById(id);

        // Verifica se o mentorado foi encontrado
        if (!mentorado) {
            // Se não encontrado, retorna uma resposta com status 404 (Não encontrado)
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        // Retorna o mentorado encontrado como resposta com status 200 (OK)
        return res.status(200).json(mentorado);
    } catch (error) {
        // Em caso de erro durante a busca, retorna uma resposta com status 500 (Erro interno do servidor)
        return res.status(500).json({ error: 'Erro ao buscar mentorado.' });
    }
});



// Rota para cadastrar um novo mentorado 
routes.post('/', async (req, res) => {
    try {
        const body = req.body;
        const mentorado = await MentoradoService.addMentorado(body);
        return res.status(200).json(mentorado);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao cadastrar mentorado.' });
    }
});



// Rota para atualizar os dados de um mentorado por ID
routes.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const mentorado = await MentoradoService.updateMentorado(id, body);

        return res.status(200).json(mentorado);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao atualizar mentorado.' });
    }
});



// Rota para deletar um mentorado por ID
routes.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        await MentoradoService.deleteMentorado(id);

        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao deletar mentorado.' });
    }
});


export const MentoradoController = routes;