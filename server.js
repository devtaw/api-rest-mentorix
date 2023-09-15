//Importação do express
import express from "express";
import { AutenticacaoController } from "./src/controllers/autenticacao-controller.js";
import { AreaController } from "./src/controllers/area-controller.js";

//constante para rodar o express
const app = express();

//Const para definir o port
const port = process.env.PORT || 3000;

//Middleware para reconhecimento do formato JSON
app.use(express.json());

//Aqui, importa-se o controller;

//Aqui, chama-se as rotas
app.use("/autenticacao", AutenticacaoController);
app.use("/area", AreaController);

//Aqui, é definido o "levante" para o servidor da API
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost${port}`);
});
