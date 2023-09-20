import AreaAtuacaoModel from "../database/models/area-atuacao.mjs";
import { ServiceError } from "../common/service-error.js";

export class AreaAtuacaoService {
  async getAllAreas() {
    return AreaAtuacaoModel.findAll();
  }

  async getAreaById(areaId) {
    const areaAtuacao = AreaAtuacaoModel.findByPk(areaId);
    if (!areaAtuacao) {
      throw new ServiceError("Area de atuação não encontrada", 404);
    }
    return areaAtuacao;
  }

  async addArea(newArea) {
    // caso a validação falhe, a exceção será lançada
    if (!this.addAreaIsValid(newArea)) {
      return;
    }

    return AreaAtuacaoModel.create(newArea);
  }

  async updateArea(areaId, areaToUpdate) {
    const areaAtuacao = await AreaAtuacaoModel.findByPk(areaId);

    // isso é uma validação
    if (!areaAtuacao) {
      throw new ServiceError("Area de atuação não encontrada", 404);
    }

    return areaAtuacao.update(areaToUpdate);
  }

  async deleteArea(areaId) {
    const areaAtuacao = await AreaAtuacaoModel.findByPk(areaId);

    // isso é uma validação
    if (!areaAtuacao) {
      throw new ServiceError("Area de atuação não encontrada", 404);
    }

    return areaAtuacao.destroy();
  }

  /**
   * 1. verifico no AreaAtuacaoModel quais são os campos obrigatórios
   * 2. verifico se todos os campos obrigatórios foram enviados
   * 3. retorno true caso todos os campos obrigatórios tenham sido enviados
   * 4. lanço uma exceção caso algum campo obrigatório não tenha sido enviado
   */
  addAreaIsValid(newArea) {
    if (!newArea.nome || newArea.nome.trim() === "") {
      throw new ServiceError("Nome da área de atuação é obrigatório", 400);
    }

    return true;
  }
}
