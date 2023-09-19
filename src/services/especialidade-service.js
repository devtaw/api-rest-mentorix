import EspecialidadeModel from "../database/models/especialidade.mjs";
import { ServiceError } from "../common/service-error.js";

export class EspecialidadeService {
  async getAllEspecialidades() {
    return EspecialidadeModel.findAll();
  }

  async getEspecialidadeById(idEspecialidade) {
    const especialidade = EspecialidadeModel.findByPk(idEspecialidade);

    if (!especialidade) {
      throw new ServiceError("Especialidade não encontrada", 404);
    }
    return especialidade;
  }

  async addEspecialidade(dadosEspecialidade) {
    return EspecialidadeModel.create(dadosEspecialidade);
  }

  async updateEspecialidade(idEspecialidade, dadosEspecialidade) {
    const especialidade = await EspecialidadeModel.findByPk(idEspecialidade);

    if (!especialidade) {
      throw new ServiceError("Especialidade não encontrada", 404);
    }

    return especialidade.update(dadosEspecialidade);
  }

  async deleteEspecialidade(especialidadeId) {
    const especialidade = await EspecialidadeModel.findByPk(especialidadeId);

    if (!especialidade) {
      throw new ServiceError("Especialidade não encontrada", 404);
    }

    return especialidade.destroy();
  }
}
