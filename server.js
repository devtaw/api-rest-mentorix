//Importação do express
import express from "express";
import { AutenticacaoController } from "./src/controllers/autenticacao-controller.js";
import { MentoradoController } from "./src/controllers/mentorado-controller.js";
import { EspecialidadeController } from "./src/controllers/especialidade-controller.js";
import { AreaAtuacaoController } from "./src/controllers/area-atuacao-controller.js";

import DB from "./src/database/models/index.cjs";
import { AgendamentoController } from "./src/controllers/agendamento-controller.js";
import { MentorEspecialidadeController } from "./src/controllers/mentor-especialidade-controller.js";
const sequelize = DB.sequelize;

//constante para rodar o express
const app = express();

//Const para definir o port
const port = process.env.PORT || 3000;

//Middleware para reconhecimento do formato JSON
app.use(express.json());

//Aqui, importa-se o controller;

//Aqui, chama-se as rotas
app.use("/autenticacao", AutenticacaoController);
app.use("/mentorados", MentoradoController);
app.use("/especialidades", EspecialidadeController);
app.use("/areas-atuacao", AreaAtuacaoController);
app.use("/agendamentos", AgendamentoController);
app.use("/mentores", MentoradoController);
app.use("/mentor-especialidades", MentorEspecialidadeController);

sequelize.sync().then(() => {
  console.log("Tabelas sincronizadas");
});

//Aqui, é definido o "levante" para o servidor da API
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
