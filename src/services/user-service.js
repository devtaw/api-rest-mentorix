
// Método para verificar a senha
export class UserService {
  verificarSenha(senha) {
    return bcrypt.compareSync(senha, this.senhaCriptografada);
  }
}
