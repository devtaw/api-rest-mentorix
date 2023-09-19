import MentoradoModel from "../database/models/mentorado.mjs";
// TODO: ACRESCENTAR EM TODOS OS SERVICES QUE RETORNARM O SERVICE ERROR
import { ServiceError } from "../common/service-error.js";
export class MentoradoService {
  async getAllMentorados() {
    return MentoradoModel.findAll();
  }
  async getMentoradoById(idMentorado) {
    return MentoradoModel.findByPk(idMentorado);
  }
  async addMentorado(dadosMentorado) {
    return MentoradoModel.create(dadosMentorado);
  }
  async updateMentorado(idMentorado, dadosMentorado) {
    const mentorado = await MentoradoModel.findByPk(idMentorado);
    // TODO: AQUI FOI DEFINIDO QUE NÃO FOI ENCONTRADO UM MENTORADO.
    if (!mentorado) {
      // return res.status(404).json({ error: "Mentorado não encontrado." });
      // TODO: ACRESCENTAR EM TODOS OS CONTROLLERS QUE RETORNARM O SERVICE ERROR - THROW NEW LANÇA UM ERRO OU EXCEÇÃO E ELE PARA A EXECUAÇÃO DO ENDPOINT E LANÇA UM ERRO PARA QUEM ESTIVER CHAMANDO A FUNÇÃO
      throw new ServiceError("Mentorado não encontrado.", 404);
    }

    await mentorado.update(dadosMentorado);
  }
  async deleteMentorado(idMentorado) {
    const mentorado = await MentoradoModel.findByPk(idMentorado);
    if(!mentorado) {
      throw new ServiceError("Mentorado não encontrado.", 404);
    }

    // if (!mentorado) {
    //    return res.status(404).json({ error: 'Mentorado não encontrado.' });
    //}

    return mentorado.destroy();
  }
}
