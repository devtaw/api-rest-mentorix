import AreaAtuacaoModel from "../database/models/area-atuacao.mjs";

export class AreaAtuacaoService {
  async getAllAreas() {
    return AreaAtuacaoModel.findAll();
  }

  async addArea(newArea) {
    return AreaAtuacaoModel.create(newArea);
  }
}
