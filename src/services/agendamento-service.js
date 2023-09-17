// Onde será implementado o CRUD.
import Agendamento from "../database/models/agendamento.mjs";
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
        const agendamento = await Agendamento.Model.findByPk(idAgendamento);

        // if (!especialidade) {
        //   throw new Error("Especialidade não encontrada.");
        // }

        return agendamento.update(dadosAgendamento);
    }

    async deleteAgendamento(AgendamentoId) {
        const agendamento = await AgendamentoModel.findByPk(AgendamentoId);

          // if (!especialidade) {
        //   throw new Error("Especialidade não encontrada.");
        // }

        return agendamento.destroy();
    }
}