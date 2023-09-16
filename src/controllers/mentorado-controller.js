import express from 'express';
import Mentorado from '../database/models/mentorado.js';

const routes = express.Router();

routes.get('/', async (req, res) => {
    try {
      const listaMentorados = await Mentorado.findAll();
      return res.status(200).json(listaMentorados);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar mentorados.' });
    }
  });

  routes.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const mentorado = await Mentorado.findByPk(id);

    if (!mentorado) {
      return res.status(404).json({ error: 'Usuario não encontrado.' });
    }

    return res.status(200).json(mentorado);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar mentorado.' });
  }
});

// Rota para cadastrar um novo mentorado
routes.post('/', async (req, res) => {
    try {
      const body = req.body;
      const mentorado = await Mentorado.create(body);
      return res.status(201).json(mentorado);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao cadastrar mentorado.' });
    }
  });