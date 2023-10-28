import jsonwebtoken from "jsonwebtoken";

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

    return response.status(401).json({ message: "Usuário não autenticado!" });
  }
}
