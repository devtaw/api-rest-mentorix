import { ServiceError } from "../common/service-error.js";
import MentorModel from "../database/models/mentor.mjs";
import { UserService } from "../services/user-service.js";

const userService = new UserService();

export class MentorService {
  async getAllMentores() {
    return MentorModel.findAll();
  }

  async asgetMentorById(mentorId) {
    const mentor = await MentorModel.findByPk(mentoraId);

    if (!mentor) {
      throw new ServiceError("Mentor não encontrado.", 404);
    }

    return mentor;
  }

  async addMentor(newMentor) {
    // chama o método que verifica se o mentor é válido
    // se não for válido, o método mentorValido lança um erro
    if (!this.mentorValido(newMentor)) {
      return;
    }

    const user = await userService.addUser({
      email: newMentor.email,
      senhaCriptografada: newMentor.senha,
    });

    // associa o usuário ao mentor
    newMentor.user_id = user.id;

    // cria o mentor
    return MentorModel.create(newMentor);

    // cria um usuário antes de criar um mentor
  }

  async updateMentor(mentorId, newMentor) {
    const mentor = await MentorModel.findByPk(mentorId);

    if (!mentor) {
      throw new ServiceError("Mentor não encontrado.", 404);
    }

    // chama o método que verifica se o mentor é válido
    // se não for válido, o método mentorValido lança um erro
    if (!this.mentorValido(newMentor)) {
      return;
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
    if (!newMentor.email || !newMentor.senha.trim()) {
      throw new ServiceError("Email é obrigatório.", 400);
    }

    if (!newMentor.senha || !newMentor.senha.trim()) {
      throw new ServiceError("Senha é obrigatória.", 400);
    }

    if (!newMentor.nomeCompleto || !newMentor.nomeCompleto.trim()) {
      throw new ServiceError("Nome é obrigatório.", 400);
    }

    if (!newMentor.dataNascimento || !newMentor.dataNascimento.trim()) {
      throw new ServiceError("Data nascimento é obrigatório.", 400);
    }

    if (!newMentor.telefone || !newMentor.telefone.trim()) {
      throw new ServiceError("Telefone é obrigatório.", 400);
    }

    if (!newMentor.nivelExperiencia || !newMentor.nivelExperiencia.trim()) {
      throw new ServiceError("Nível de experiencia é obrigatório.", 400);
    }

    if (!newMentor.experienciaProfissional || !newMentor.experienciaProfissional.trim()) {
      throw new ServiceError("Experiencia profissional é obrigatório.", 400);
    }

    return true;
  }
}
