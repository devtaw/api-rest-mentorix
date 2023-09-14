// Método para verificar a senha
export class LoginService {
  verificarSenha(senha) {
    return bcrypt.compareSync(senha, this.senhaCriptografada);
  }
}
