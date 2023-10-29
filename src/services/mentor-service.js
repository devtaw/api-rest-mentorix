import { ServiceError } from "../common/service-error.js";
import MentorModel from "../database/models/mentor.mjs";
import MentorEspecialidadeModel from "../database/models/mentor-especialidade.mjs";
import { UserService } from "../services/user-service.js";

const userService = new UserService();

export class MentorService {
  async getAllMentores() {
    const mentores = await MentorModel.findAll();
  }

  async getMentorById(mentorId) {
    const mentor = await MentorModel.findByPk(mentorId);

    if (!mentor) {
      throw new ServiceError("Mentor não encontrado.", 404);
    }

    const mentorEspecialidades = await MentorEspecialidadeModel.findOne({
      where: {
        mentor_id: mentor.id,
      },
    });

    return {
      mentor,
      especialidades: JSON.parse(mentorEspecialidades?.especialidades) || [],
    };
  }

  async addMentor(newMentor) {
    // chama o método que verifica se o mentor é válido
    // se não for válido, o método mentorValido lança um erro
    const mentorValido = await this.mentorValido(newMentor);
    if (!mentorValido) {
      return;
    }

    // cria um usuário antes de criar um mentor
    const user = await userService.addUser({
      email: newMentor.email,
      senhaCriptografada: newMentor.senha,
    });

    // associa o usuário ao mentor
    newMentor.user_id = user.id;

    // cria o mentor
    const mentor = await MentorModel.create(newMentor);

    // cria mentor_especialidade
    await MentorEspecialidadeModel.create({
      mentor_id: mentor.id,
      especialidades: JSON.stringify(newMentor.especialidades),
    });

    return mentor;
  }

  async updateMentor(mentorId, newMentor) {
    const mentor = await MentorModel.findByPk(mentorId);

    if (!mentor) {
      throw new ServiceError("Mentor não encontrado.", 404);
    }

    // chama o método que verifica se o mentor é válido
    // se não for válido, o método mentorValido lança um erro
    const mentorValido = await this.mentorValido(newMentor);
    if (!mentorValido) {
      return;
    }

    // atualiza as especialidades do mentor
    const mentorEspecialidades = await MentorEspecialidadeModel.findOne({
      where: {
        mentor_id: mentor.id,
      },
    });

    // se já tiver uma lista de especialidades, atualiza o registro
    if (mentorEspecialidades && mentorEspecialidades.length) {
      await mentorEspecialidades.update({
        especialidades: JSON.stringify(newMentor.especialidades),
      });
    }
    // se nao tiver nenhuma especialidade, cria um novo registro
    else if (!mentorEspecialidades || !mentorEspecialidades.length) {
      await MentorEspecialidadeModel.create({
        mentor_id: mentor.id,
        especialidades: JSON.stringify(newMentor.especialidades),
      });
    }

    return mentor.update(newMentor);
  }

  async deleteMentor(mentorId) {
    const mentor = await MentorModel.findByPk(mentorId);

    if (!mentor) {
      throw new ServiceError("Mentor não encontrado.", 404);
    }

    return mentor.destroy();
  }

  async mentorValido(newMentor) {
    if (!newMentor.nomeCompleto || !newMentor.nomeCompleto.trim()) {
      throw new ServiceError("Nome é obrigatório.", 400);
    }

    if (!newMentor.fotoPerfil || !newMentor.fotoPerfil.trim()) {
      throw new ServiceError("Foto perfil é obrigatório.", 400);
    }

    if (!newMentor.profissao || !newMentor.profissao.trim()) {
      throw new ServiceError("Profissao é obrigatório.", 400);
    }

    if (!newMentor.biografia || !newMentor.biografia.trim()) {
      throw new ServiceError("Biografia é obrigatório.", 400);
    }

    if (!newMentor.especialidades || !newMentor.especialidades?.length) {
      throw new ServiceError("Lista de especialidades é obrigatório.", 400);
    }

    const especialidadesPermitidas = [
      "desenvolvimento",
      "criptomoedas",
      "blockchain",
      "financas",
      "investimentos",
      "estrategia",
      "criatividade",
      "comunicacao",
      "produtividade",
    ];

    const todasEspecialidadesSaoValidas = newMentor.especialidades.every((especialidade) =>
      especialidadesPermitidas.includes(especialidade)
    );

    console.log("todasEspecialidadesSaoValidas ", todasEspecialidadesSaoValidas);

    console.log("newMentor.especialidades ", newMentor.especialidades);

    if (!todasEspecialidadesSaoValidas) {
      throw new ServiceError(
        `Especialidades inválidas. Especialidades permitidas: ${especialidadesPermitidas.join(", ")}`,
        400
      );
    }

    return true;
  }
}
