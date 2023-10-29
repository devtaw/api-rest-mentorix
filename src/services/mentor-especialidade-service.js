import MentorEspecialidadeModel from "../database/models/mentor-especialidade.mjs";
import { ServiceError } from "../common/service-error.js";

// Classe que define o serviço para a entidade "Mentor Especialidade"
export class MentorEspecialidadeService {
  // Retorna todos os registros de "Mentor Especialidade" no banco de dados
  async getAllMentorEspecialidades() {
    return MentorEspecialidadeModel.findAll().then((result) => {
      return result.map((data) => ({
        ...data.dataValues,
        especialidades: JSON.parse(data.dataValues.especialidades),
      }));
    });
  }

  // Retorna um registro de "Mentor Especialidade" pelo ID
  async getMentorEspecialidadeById(idMentorEspecialidade) {
    const mentorEspecialidade = await MentorEspecialidadeModel.findByPk(idMentorEspecialidade);

    // Verifica se o registro de "Mentor Especialidade" foi encontrado
    if (!mentorEspecialidade) {
      throw new ServiceError("Mentor Especialidade não encontrado.", 404);
    }
    return mentorEspecialidade;
  }

  // Adiciona um novo registro de "Mentor Especialidade" no banco de dados
  async addMentorEspecialidade(dadosMentorEspecialidade) {
    // Vefifica se o id do mentor e da especialidade existem
    if (!dadosMentorEspecialidade.mentor_id || !dadosMentorEspecialidade.especialidade_id) {
      throw new ServiceError("Mentor ou Especialidade não encontrado.", 404);
    }

    return MentorEspecialidadeModel.create(dadosMentorEspecialidade);
  }

  // Atualiza um registro de "Mentor Especialidade" pelo ID
  async updateMentorEspecialidade(idMentorEspecialidade, dadosMentorEspecialidade) {
    const mentorEspecialidade = await MentorEspecialidadeModel.findByPk(idMentorEspecialidade);

    // Verifica se o registro de "Mentor Especialidade" foi encontrado
    if (!mentorEspecialidade) {
      throw new ServiceError("Mentor Especialidade não encontrado.", 404);
    }

    // Vefifica se o id do mentor e da especialidade existem
    if (!dadosMentorEspecialidade.mentor_id || !dadosMentorEspecialidade.especialidade_id) {
      throw new ServiceError("Mentor ou Especialidade não encontrado.", 404);
    }

    // Atualiza os dados do registro
    await mentorEspecialidade.update(dadosMentorEspecialidade);
  }

  // Exclui um registro de "Mentor Especialidade" pelo ID
  async deleteMentorEspecialidade(idMentorEspecialidade) {
    const mentorEspecialidade = await MentorEspecialidadeModel.findByPk(idMentorEspecialidade);

    // Verifica se o registro de "Mentor Especialidade" foi encontrado
    if (!mentorEspecialidade) {
      throw new ServiceError("Mentor Especialidade não encontrado.", 404);
    }

    // Remove o registro do banco de dados
    return mentorEspecialidade.destroy();
  }
}
