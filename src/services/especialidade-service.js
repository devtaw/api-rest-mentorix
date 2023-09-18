import { EspecialidadeModel } from "../database/models/especialidade.mjs"
export class EspecialidadeService {

  async getAllEspecialidades() {
    return EspecialidadeModel.findAll();
  }

  async getEspecialidadeById(idEspecialidade) {
    return EspecialidadeModel.findByPk(idEspecialidade);
  }

  async addEspecialidade(dadosEspecialidade) {
    return EspecialidadeModel.create(dadosEspecialidade);
  }

  async updateEspecialidade(idEspecialidade, dadosEspecialidade) {
    const especialidade = await EspecialidadeModel.findByPk(idEspecialidade);

    if (!especialidade) {
      throw new Error("Especialidade não encontrada.");
    }

    return especialidade.update(dadosEspecialidade);
  }

  async deleteEspecialidade(especialidadeId) {
    const especialidade = await EspecialidadeModel.findByPk(especialidadeId);

    if (!especialidade) {
      throw new Error("Especialidade não encontrada.");
    }

    return especialidade.destroy();
  }
}
