// import { AreaService } from "../services/area-service.js";
import express from "express";
const routes = express.Router();

// const areaService = new AreaService();

//Define uma rota para acessar o verbo HTTP = get. Define rota area, quando fizermos uma requisição get area vai cair na função abaixo.
routes.get("/", async (request, response) => {
  try {
    console.log("get area");
    const cadastroAreas = await areaService.obterAreas();
    return response.status(200).json(cadastroAreas);
  } catch (error) {
    return response.status(500).json({ mensagem: "Erro ao listar Áreas." }); //pode mudar no futuro dependendo na Regra de Negócio
  }
});

routes.get("/:id", (request, response) => {
  try {
    const id = request.params.id;
    console.log("get area");
    return response.status(200).json({
      message: "Caiu no endpoint get area by id " + id,
    });
  } catch (error) {
    return response.status(500).json({ mensagem: "Erro ao listar Área." }); //pode mudar no futuro dependendo na Regra de Negócio
  }
});

routes.post("/", (request, response) => {
  try {
    const data = request.body;
    console.log("post area");
    return response.status(200).json({
      // endpoint cada bloquinho desse get, post é um ponto de chamada (requição do verbo http)
      message: "Caiu no endpoint post area",
      data, //sugar sintaxe para simplificar a atribuição de propriedade dentro do objeto, seria data:data
    });
  } catch (error) {
    return response.status(500).json({ mensagem: "Erro ao cadastrar Área." }); //pode mudar no futuro dependendo na Regra de Negócio
  }
});

routes.put("/:id", (request, response) => {
  try {
    const id = request.params.id;
    const data = request.body;
    console.log("put area");
    return response.status(200).json({
      // endpoint cada bloquinho desse put, put é um ponto de chamada (requição do verbo http)
      message: "Caiu no endpoint put area by id " + id,
      data, //sugar sintaxe para simplificar a atribuição de propriedade dentro do objeto, seria data:data
    });
  } catch (error) {
    return response.status(500).json({ mensagem: "Erro ao incluir Área." }); //pode mudar no futuro dependendo na Regra de Negócio
  }
});

routes.delete("/:id", (request, response) => {
  try {
    const id = request.params.id;
    console.log("put area");
    return response.status(200).json({
      // endpoint cada bloquinho desse delete, delete é um ponto de chamada (requição do verbo http)
      message: "Caiu no endpoint delete area by id " + id,
    });
  } catch (error) {
    return response.status(500).json({ mensagem: "Erro ao deletar Área." }); //pode mudar no futuro dependendo na Regra de Negócio
  }
});

// Cada uma das entidades deve realizar todos os métodos HTTP:
// ● GET - Para listar os cadastros;
// ● GET - Para buscar os dados de um cadastro específico com base em um de seus atributos (ID/Código, por exemplo).
// ● POST - Para incluir um novo cadastro;
// ● PUT/PATCH - Para editar os cadastros;
// ● DELETE - Para remover um cadastro;

export const AreaController = routes;
