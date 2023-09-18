import AreaAtuacaoModel from "../database/models/area-atuacao.js";

export class AreaAtuacaoService {
  async getAllAreas() {
    return await AreaAtuacaoModel.findAll();
  }

  async addArea(newArea) {
    return AreaAtuacaoModel.create(newArea);
  }
}
