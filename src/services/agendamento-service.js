// Onde será implementado o CRUD.
import AgendamentoModel from "../database/models/agendamento.mjs";
import { ServiceError } from "../common/service-error.js";
export class AgendamentoService {
  async getAllAgendamentos() {
    return AgendamentoModel.findAll();
  }
  async getAgendamentosById(idAgendamento) {
    return AgendamentoModel.findByPk(idAgendamento);
  }
  async addAgendamento(dadosAgendamento) {
    return AgendamentoModel.create(dadosAgendamento);
  }
  async updateAgendamento(idAgendamento, dadosAgendamento) {
    const agendamento = await AgendamentoModel.findByPk(idAgendamento);

    if (!agendamento) {
      throw new ServiceError("Agendamento não encontrada.", 404);
    }

    return agendamento.update(dadosAgendamento);
  }

  async deleteAgendamento(AgendamentoId) {
    const agendamento = await AgendamentoModel.findByPk(AgendamentoId);

    if (!agendamento) {
      throw new ServiceError("Agendamento não encontrada.", 404);
    }

    return agendamento.destroy();
  }
}
