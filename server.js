//Importação do express
import express from "express";
import { AutenticacaoController } from "./src/controllers/autenticacao-controller.js";
import {MentoradoController} from "./src/controllers/mentorado-controller.js";
import {AutenticacaoController} from "./src/controllers/autenticacao-controller.js";
import {EspecialidadeController} from "./src/controllers/especialidade-controller.js";


//constante para rodar o express
const app = express();

//Const para definir o port
const port = process.env.PORT || 3000;

//Middleware para reconhecimento do formato JSON
app.use(express.json());

//Aqui, importa-se o controller;

//Aqui, chama-se as rotas
app.use("/autenticacao", AutenticacaoController);
app.use("/mentorado", MentoradoController);
app.use("/especialidade", EspecialidadeController);


//Aqui, é definido o "levante" para o servidor da API
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
