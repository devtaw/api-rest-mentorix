import jsonwebtoken, { JsonWebTokenError } from "jsonwebtoken";
import { json } from "sequelize";

export function authMiddleware(request, response, next) {
  try {
    const [, token] = Buffer.from(request.headers.authorization.split(" ")).toString().split(".");

    if (!token) {
      return response.status(401).json({ message: "Usuário não autenticado!" });
    }

    const payload = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    request.user = payload;

    return next();
  } catch (error) {
    console.log(error);

    if (error instanceof JsonWebTokenError) {
      {
        return response.status(401).json({ message: "Usuário não autenticado!" });
      }

      return response.status(500).json({ message: "Ocorreu um erro ao autenticar o usuário." });
    }
  }
}
