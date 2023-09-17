import MentorEspecialidadeModel from "../database/models/mentorEspecialidade.mjs"

// Classe que define o serviço para a entidade "Mentor Especialidade"
export class MentorEspecialidadeService {
    
    // Retorna todos os registros de "Mentor Especialidade" no banco de dados
    async getAllMentorEspecialidades() {
        return MentorEspecialidadeModel.findAll();
    }

    // Retorna um registro de "Mentor Especialidade" pelo ID
    async getMentorEspecialidadeById(idMentorEspecialidade) {
        return MentorEspecialidadeModel.findByPk(idMentorEspecialidade);
    }

    // Adiciona um novo registro de "Mentor Especialidade" no banco de dados
    async addMentorEspecialidade(dadosMentorEspecialidade) {
        return MentorEspecialidadeModel.create(dadosMentorEspecialidade);
    }

    // Atualiza um registro de "Mentor Especialidade" pelo ID
    async updateMentorEspecialidade(idMentorEspecialidade, dadosMentorEspecialidade) {
        const mentorEspecialidade = await MentorEspecialidadeModel.findByPk(idMentorEspecialidade);

        // Verifica se o registro de "Mentor Especialidade" foi encontrado
        //if (!mentorEspecialidade) {
        //    return res.status(404).json({ error: 'Mentor Especialidade não encontrado.' });
        //}

        // Atualiza os dados do registro
        await mentorEspecialidade.update(dadosMentorEspecialidade);
    }

    // Exclui um registro de "Mentor Especialidade" pelo ID
    async deleteMentorEspecialidade(idMentorEspecialidade) {
        const mentorEspecialidade = await MentorEspecialidadeModel.findByPk(idMentorEspecialidade);

        // Verifica se o registro de "Mentor Especialidade" foi encontrado
        //if (!mentorEspecialidade) {
        //    return res.status(404).json({ error: 'Mentor Especialidade não encontrado.' });
        //}

        // Remove o registro do banco de dados
        return mentorEspecialidade.destroy();
    }
}
