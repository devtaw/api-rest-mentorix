// Onde será implementado o CRUD.
import AgendamentoModel from "../database/models/agendamento.mjs";
import Mentor from "../database/models/mentor.mjs";
import { MentorService } from "../services/mentor-service.js";
import { ServiceError } from "../common/service-error.js";
import { mailClient } from "../common/mail-client.js";
import dotenv from "dotenv";
const result = dotenv.config();
const configs = result.parsed;
export class AgendamentoService {
  mentorService;

  constructor() {
    this.mentorService = new MentorService();
  }

  async getAllAgendamentos() {
    return AgendamentoModel.findAll();
  }

  async getAgendamentosById(idAgendamento) {
    const agendamento = await AgendamentoModel.findByPk(idAgendamento);
    if (!agendamento) {
      throw new ServiceError("Agendamento não encontrada.", 404);
    }
    return agendamento;
  }

  async addAgendamento(dadosAgendamento) {
    if (!dadosAgendamento.mentor_id) {
      throw new ServiceError("Campo 'mentor_id' é obrigatório!", 400);
    }

    if (!dadosAgendamento.email || !dadosAgendamento.email.trim()) {
      throw new ServiceError("Campo 'email' é obrigatório!", 400);
    }

    if (!dadosAgendamento.nomeCompleto || !dadosAgendamento.nomeCompleto.trim()) {
      throw new ServiceError("Campo 'nomeCompleto' é obrigatório!", 400);
    }

    if (!dadosAgendamento.campoMensagem || !dadosAgendamento.campoMensagem.trim()) {
      throw new ServiceError("Campo mensagem é obrigatório!", 400);
    }

    const agendamento = AgendamentoModel.create(dadosAgendamento);

    await this.sendMailNewAgendamento(dadosAgendamento);
    console.log("===== EMAIL ENVIADO ======");

    return agendamento;
  }

  async updateAgendamento(idAgendamento, dadosAgendamento) {
    const agendamento = await AgendamentoModel.findByPk(idAgendamento);

    if (!agendamento) {
      throw new ServiceError("Agendamento não encontrada.", 404);
    }

    const agendamentoEditado = await agendamento.update(dadosAgendamento);

    console.log("dadosAgendamento ", agendamentoEditado);
    await this.sendMailAgendamentoUpdate(agendamentoEditado);

    return agendamentoEditado;
  }

  async deleteAgendamento(AgendamentoId) {
    const agendamento = await AgendamentoModel.findByPk(AgendamentoId);

    if (!agendamento) {
      throw new ServiceError("Agendamento não encontrada.", 404);
    }

    return agendamento.destroy();
  }

  async sendMailNewAgendamento(dadosAgendamento) {
    const mentor = await this.mentorService.getMentorById(dadosAgendamento.mentor_id);

    if (!mentor && !mentor.length) {
      throw new ServiceError("Mentor não encontrado.", 404);
    }

    const mentorixUserEmail = process.env.DEFAULT_EMAIL_USER || commonConfigs.DEFAULT_EMAIL_USER;

    const mensagem = `
<h1>Você tem uma nova solicitação de agendamento!</h1>

<p>Nome: ${dadosAgendamento.nomeCompleto}</p>
<p>Email: ${dadosAgendamento.email}</p>
<p>Profissão: ${dadosAgendamento.profissao || "Não informado."}</p>
<p>Mensagem: ${dadosAgendamento.campoMensagem}</p>
`;

    console.log(
      {
        from: `Suporte Mentorix <${mentorixUserEmail}>`,
        to: mentor.email,
        subject: "[Mentorix] Você tem uma nova solicitação de agendamento!",
        html: mensagem,
        text: mensagem,
      },
      mentor
    );

    return mailClient
      .sendMail({
        from: `Suporte Mentorix <${mentorixUserEmail}>`,
        to: mentor.email,
        subject: "[Mentorix] Você tem uma nova solicitação de agendamento!",
        html: mensagem,
        text: mensagem,
      })
      .then(console.log)
      .catch(console.error);
  }

  async sendMailAgendamentoUpdate(dadosAgendamento) {
    const mentor = await this.mentorService.getMentorById(dadosAgendamento.mentor_id);

    if (!mentor && !mentor.length) {
      throw new ServiceError("Mentor não encontrado.", 404);
    }

    const mentorixUserEmail = process.env.EMAIL_USER || configs?.EMAIL_USER;

    const mensagem = `
<h1>Você tem uma atualização na sua solicitação de agendamento!</h1>

<p>Mentor: ${mentor.nomeCompleto}</p>
<p>Email: ${dadosAgendamento.email}</p>
<p>Resposta: ${dadosAgendamento.aceite ? "Soliticação aceita!" : "Solicitação recusada."}</p>
`;

    return mailClient
      .sendMail({
        from: `Suporte Mentorix <${mentorixUserEmail}>`,
        to: dadosAgendamento.email,
        subject: "[Mentorix] Você tem uma atualização na sua solicitação de agendamento!",
        html: mensagem,
        text: mensagem,
      })
      .then(console.log)
      .catch(console.error);
  }
}
