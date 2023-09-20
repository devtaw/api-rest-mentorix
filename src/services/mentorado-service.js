import { ServiceError } from "../common/service-error.js";
import MentoradoModel from "../database/models/mentorado.mjs";

export class MentoradoService {
  async getAllMentorados() {
    return MentoradoModel.findAll();
  }

  async getMentoradoById(mentoradoId) {
    const mentorado = await MentoradoModel.findByPk(mentoradoId);

    if (!mentorado) {
      // return res.status(404).json({ error: "Mentorado não encontrado." });
      throw new ServiceError("Mentorado não encontrado.", 404);
    }

    return mentorado;
  }
  
  async addMentorado(dadosMentorado) {
    if (!dadosMentorado.nome || !dadosMentorado.nome.trim()) {
      throw new ServiceError("Nome é obrigatório", 400);
    }

    if (!dadosMentorado.email || !dadosMentorado.email.trim()) {
      throw new ServiceError("Email é obrigatório", 400);
    }

    if (!dadosMentorado.telefone || !dadosMentorado.telefone.trim()) {
      throw new ServiceError("Telefone é obrigatório", 400);
    }

    if (!dadosMentorado.senha || !dadosMentorado.senha.trim()) {
      throw new ServiceError("Senha é obrigatória", 400);
    }

    return MentoradoModel.create(dadosMentorado);
  }

  async updateMentorado(mentoradoId, dadosMentorado) {
    const mentorado = await MentoradoModel.findByPk(mentoradoId);

    if (!mentorado) {
      throw new ServiceError("Mentorado não encontrado", 404);
    }

    if (!dadosMentorado.nome || !dadosMentorado.nome.trim()) {
      throw new ServiceError("Nome é obrigatório", 400);
    }

    if (!dadosMentorado.email || !dadosMentorado.email.trim()) {
      throw new ServiceError("Email é obrigatório", 400);
    }

    if (!dadosMentorado.telefone || !dadosMentorado.telefone.trim()) {
      throw new ServiceError("Telefone é obrigatório", 400);
    }

    if (!dadosMentorado.senha || !dadosMentorado.senha.trim()) {
      throw new ServiceError("Senha é obrigatória", 400);
    }

    return mentorado.update(dadosMentorado);
  }

  async deleteMentorado(mentoradoId) {
    const mentorado = await MentoradoModel.findByPk(mentoradoId);

    if (!mentorado) {
      throw ServiceError("Mentorado não encontrado", 404);
    }

    return mentorado.destroy();
  }
}
