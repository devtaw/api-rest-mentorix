# Projeto Mentorix

## Descrição do projeto

Olá!
Apresentamos aqui o nosso projeto, o Mentorix. Trata-se de uma API seguindo o padrão Rest feita com Node.JS.

O objetivo deste projeto foi trabalhar em equipe para produzir uma API seguindo os padrões REST, para que mais tarde façamos integração com o Front-End que será feito em React.

O que é uma API REST? API (Application Programming Interface) é uma série de definições e protocolos usados para montar e integrar softwares de aplicação. Uma API seguindo o padrão REST (Representational State Transfer) indica que, quando o cliente/usuário requerir um recurso usando esse tipo de API, o servidor transferirá o recurso de uma maneira padronizada (.json).

## Fluxo do projeto

1. Criar o DB Diagram;

- 1.1. Criar banco de dados no mySQL Workbench, o nome será: database_mentorix;

2. Rodar SQL Script para criar as tabelas e relacionamentos no Banco de Dados no mySQL Workbench;

3. Modelar as entidades no código do projeto (criar models);

4. Estabelecer relações entre as entidades de acordo com DB Diagram;

5. Cria método dentro do service para interagir com o banco de dados e retornar a informação correta para o Controller;

6. Criar rota no Controller (Fazer os verbos, exemplo: route.get);

7. Dentro da rota do Controller chamar a função do service criada para obter/salvar/editar/deletar dados;

8. Retorna no Controller as informações obtidas;

9. Hospedagem da API no Render (Deploy);

10. Hospedagem do Banco de Dados no Google Cloud;

11. Verificar com o Insomnia se a rota está funcionando corretamente.

# Tecnologias Utilizadas

Node.js // MySQL // Postman

Bibliotecas:
Bcrypt, express, mysql2 e sequelize

# Deploy

Para fazer o deploy desse projeto rode

**_Clone o projeto_**

###### com HTTPS

```bash
git clone https://github.com/devtaw/api-rest-mentorix.git

```

###### com SSH

```bash
git clone git@github.com:devtaw/api-rest-mentorix.git
```

###### **_Entre no diretório do projeto_**

```bash
cd api-rest-mentorix
```

###### **_Abra com code (opcional)_**

```bash
code .
```

###### **_Instale as dependências_**

```bash
npm install
```

###### **_Inicie o servidor_**

```bash
npm run start

//ou

npm start

```

#### 🎉🎉🎉 É isso, aproveite o projeto.

# Teste Rotas

**_Certifique-se de ter o Postman ou Insomnia instalado em seu sistema._**

- [Postman - Download](https://www.postman.com/downloads/)
- [Insomnia - Download](https://insomnia.rest/download)

## Area Atuação

#### POST - Rota: '/areas-atuacao'

_A rota post cria area atuacao_

###### Entrada

```bash

{
		"id": 13,
		"nome": "Desenvolvimento Web",
		"descricaoArea": "criação de sites e aplicativos para a internet usando linguagens como HTML, CSS e JavaScript",
		"fotoAreaAtuacao": "https://th.bing.com/th/id/R.10a6b3802667bb8ca5177c88a880f3dc?rik=i3y9whMAtz1SSw&pid=ImgRaw&r=0 ",
		"createdAt": "2023-09-20",
		"updatedAt": "2023-09-20"
}

```

###### Saída

```bash

{
	"Sucesso": " area agendamentos" criado com sucesso!"
}

```

#### GET - Rota: '/areas-atuacao'

_A rota get busca todos as areas atuacao cadastradas_

###### Saída

```bash
{
	"id": 14,
	"nome": "Engenharia",
	"descricaoArea": "Aplica princípios científicos e matemáticos para projetar, construir e melhorar sistemas, estruturas e dispositivos",
	"fotoAreaAtuacao": "https://www.univille.edu.br/community/novoportal/VirtualDisk.html/downloadDirect/1462802/FA7-engenharia-mecanica-960x750.jpg",
	"createdAt": "2023-09-20",
	"updatedAt": "2023-09-20"
}
```

#### GET - Rota: '/areas-atuacao/:id

- A rota get id busca o areas atuacao pelo id informado\*

###### Ex rota:

https://mentorix.onrender.com/areas-atuacao/13

###### Saída

```bash
{
    "id": 13,
	"nome": "Desenvolvimento Web",
	"descricaoArea": "criação de sites e aplicativos para a internet usando linguagens como HTML, CSS e JavaScript",
	"fotoAreaAtuacao": "https://th.bing.com/th/id/R.10a6b3802667bb8ca5177c88a880f3dc?rik=i3y9whMAtz1SSw&pid=ImgRaw&r=0 ",
	"createdAt": "2023-09-20",
	"updatedAt": "2023-09-20"
}
```

#### DELETE - Rota: '/areas-atuacao/:id'

_A rota DELETE id deleta a areas-atuacao pelo id informado_

###### Ex rota:

https://mentorix.onrender.com/areas-atuacao/13

###### Saída

```bash
{
	"id": 13,
	"nome": "Desenvolvimento Web",
	"descricaoArea": "criação de sites e aplicativos para a internet usando linguagens como HTML, CSS e JavaScript",
	"fotoAreaAtuacao": "https://th.bing.com/th/id/R.10a6b3802667bb8ca5177c88a880f3dc?rik=i3y9whMAtz1SSw&pid=ImgRaw&r=0 ",
	"createdAt": "2023-09-20",
	"updatedAt": "2023-09-20"
}
```

## Agendamento

#### POST - Rota: '/agendamentos'

_A rota post cria agendamentos_

###### Entrada

```bash
{
"id": 10
 "campoMensagem": "quero agendar",
  "aceite": true,
  "mentor_id":1,
}
```

###### Saída

```

{
	"Sucesso": "agendamentos" criado com sucesso!"
}
```

#### GET - Rota: '/agendamentos'

_A rota get busca todos as agendamentos" cadastradas_

###### Saída

```bash

{
 "id": 10
 "campoMensagem": "quero agendar",
  "aceite": true,
  "mentor_id":1,
}
```

#### GET - Rota: '/agendamentos/:id'

- A rota get id busca o Agendamentos pelo id informado

###### Ex rota:

https://mentorix.onrender.com//agendamentos/10

###### Saída

```bash
{
 "id": 10
 "campoMensagem": "quero agendar",
  "aceite": true,
  "mentor_id":1,
}
```

#### DELETE - Rota: '/agendamentos'/:id

_A rota DELETE id deleta a agendamentos" pelo id informado_

###### Ex rota: https://mentorix.onrender.com/agendamentos/10

###### Saída

```bash
{

 "id": 10
 "campoMensagem": "quero agendar",
  "aceite": true,
  "mentor_id":1,
}
```

#### PUT - Rota: '/agendamentos"/:id'

_A rota PUT id atualiza agendamentos" pelo id informado_

###### Ex rota: https://mentorix.onrender.com/agendamentos/10

```bash
{

 "id": 10
 "campoMensagem": "quero agendar",
  "aceite": true,
  "mentor_id":1,
}

```

###### ⛔ Tratamento de Erro

### _Valida nome_

```bash
{
    "message": "Usuário não encontrado""
}
```

##### _Valida e-mail_

```bash
{
    "message": "Email é obrigatório"."
}
```

##### _Valida senha_

```bash
{
    "message": "Senha é obrigatória""
}
```

##### _Valida telefone_

```bash
{
    "message": "Telefone é obrigatório""
}
```

## Especialidade

#### POST - Rota: '/especialidades'

_A rota cria especialidades_

```bash
{
	"id": 1,
	"nome": "Segurança da Informação",
	"descricao": "area que se concentra em garantir a segurança e proteção dos sistemas de informação",
	"foto": "https://i.ytimg.com/vi/RnsYE2eZqkA/maxresdefault.jpg",
	"createdAt": "2023-09-21",
	"updatedAt": "2023-09-21"
}
```

#### GET - Rota '/especialidades'/

```bash
{
	"id": 1,
	"nome": "Segurança da Informação",
	"descricao": "area que se concentra em garantir a segurança e proteção dos sistemas de informação",
	"foto": "https://i.ytimg.com/vi/RnsYE2eZqkA/maxresdefault.jpg",
	"createdAt": "2023-09-21",
	"updatedAt": "2023-09-21"
},
```

#### GET ID - Rota '/especialidades/:id'

https://mentorix.onrender.com/especialidades/1

```bash
{
    "id": 1,
    "nome": "Segurança da Informação",
    "descricao": "area que se concentra em garantir a segurança e proteção dos sistemas de informação",
    "foto": "https://i.ytimg.com/vi/RnsYE2eZqkA/maxresdefault.jpg",
    "createdAt": "2023-09-21",
    "updatedAt": "2023-09-21"
}
```

#### PUT - Rota '/especialidades/:id'

```bash

 {
    "id": 3,
    "nome": "Segurança da Informação TESTE",
    "descricao": "area que se concentra em garantir a segurança e proteção dos sistemas de informação",
    "foto": "https://i.ytimg.com/vi/RnsYE2eZqkA/maxresdefault.jpg",
    "createdAt": "2023-09-21",
    "updatedAt": "2023-09-22"
}
```

#### DELETE - Rota '/especialidades/:id'

Pesquisar por ID
https://mentorix.onrender.com/especialidades/3

```bash

{
"id": 3,
"nome": "Segurança da Informação TESTE",
"descricao": "area que se concentra em garantir a segurança e proteção dos sistemas de informação",
"foto": "https://i.ytimg.com/vi/RnsYE2eZqkA/maxresdefault.jpg",
"createdAt": "2023-09-21",
"updatedAt": "2023-09-22"
}
```

Depois do Delete, pesquisar novamente por id .

Tratamento de erro

```bash
{
	"messagem": "Especialidade não encontrada"
}
```

## Mentores

#### POST - Rota: '/mentores'/

_A rota post cria area mentor_

###### Entrada

```bash

        {
		"id": 7,
		"nome": "Gerson Josias",
		"dataNascimento": "16/06/1986",
		"telefone": "041988887777",
		"nivelExperiencia": "senior",
		"experienciaProfissional": "inserir texto de experiencia profissional",
		"createdAt": "2023-09-20",
		"updatedAt": "2023-09-20"
	 }

```

###### Saída

```bash
{
	"Sucesso": "Mentor criado com sucesso!"
}
```

#### GET - Rota: '/mentores'/

_A rota get busca todos os mentores_

###### Saída

```bash
{
	"id": 7,
		"nome": "Gerson Josias",
		"dataNascimento": "16/06/1986",
		"telefone": "041988887777",
		"nivelExperiencia": "senior",
		"experienciaProfissional": "inserir texto de experiencia profissional",
		"createdAt": "2023-09-20",
		"updatedAt": "2023-09-20"
}
```

#### GET - Rota: '/mentores/:id'

- A rota get id busca o mentores pelo id informado\*

###### Ex rota:

https://mentorix.onrender.com/mentores/7

###### Saída

```bash
{
    "id": 7,
		"nome": "Gerson Josias",
		"dataNascimento": "16/06/1986",
		"telefone": "041988887777",
		"nivelExperiencia": "senior",
		"experienciaProfissional": "inserir texto de experiencia profissional",
		"createdAt": "2023-09-20",
		"updatedAt": "2023-09-20"
}
```

#### DELETE - Rota: '/mentores/:id'

_A rota DELETE id deleta o mentores pelo id informado_

###### Ex rota:

https://mentorix.onrender.com/mentores/7

###### Saída

```bash
{
	"id": 7,
		"nome": "Gerson Josias",
		"dataNascimento": "16/06/1986",
		"telefone": "041988887777",
		"nivelExperiencia": "senior",
		"experienciaProfissional": "inserir texto de experiencia profissional",
		"createdAt": "2023-09-20",
		"updatedAt": "2023-09-20"
}

```

#### PUT - Rota: '/mentores/:id'

_A rota PUT id atualiza mentores pelo id informado_

```bash
{
	"id": 7,
		"nome": "Adriano Rodrigues",
		"dataNascimento": "23/09/1998",
		"telefone": "041988887777",
		"nivelExperiencia": "pleno",
		"experienciaProfissional": "inserir texto de experiencia profissional",
		"createdAt": "2023-09-20",
		"updatedAt": "2023-09-20"
}

```

## MentoresEspecialidade

#### POST - Rota: '/mentores-especialidades

_A rota post cria mentores-especialidade_

###### Entrada

```bash

{
	"id": 13,
	"mentor_id": 5,
	"especialidade_id": 8,
	"createdAt": "2023-09-20",
	"updatedAt": "2023-09-20"
}

```

###### Saída

```bash
{
	"Sucesso": " mentor-especialidade criado com sucesso!"
}
```

#### GET - Rota: '/mentores-especialidade'

_A rota get busca todos as mentores-especialidades_

###### Saída

```bash

{
		"id": 13,
		"mentor_id": 5,
		"especialidade_id": 8,
		"createdAt": "2023-09-20",
		"updatedAt": "2023-09-20"
}

```

#### GET - Rota: '/mentor-especialidade/:id'

- A rota get id busca a especialidade do mentor pelo id informado\*

###### Ex rota: https://mentorix.onrender.com/mentor-especialidade/13

###### Saída

```bash
{
		"id": 13,
		"mentor_id": 5,
		"especialidade_id": 8,
		"createdAt": "2023-09-20",
		"updatedAt": "2023-09-20"
}

```

#### DELETE - Rota: '/mentores-especialidade/:id'

_A rota DELETE id deleta a especialidade do mentores- especialidade pelo id informado_

###### Ex rota:

https://mentorix.onrender.com/mentor-especialidade/13

###### Saída

```bash

{
		"id": 13,
		"mentor_id": 5,
		"especialidade_id": 8,
		"createdAt": "2023-09-20",
		"updatedAt": "2023-09-20"
}

```

#### PUT - Rota: '/mentores-especialidade/:id'

r
_A rota PUT id atualiza mentor-especialidade pelo id informado_

###### Ex rota: https://mentorix.onrender.com/mentores-especialidade/13

```bash

{
		"id": 13,
		"mentor_id": 7,
		"especialidade_id": 9,
		"createdAt": "2023-09-20",
		"updatedAt": "2023-09-20"
}

```

## Referência

- [Git](https://git-scm.com/)
- [VSCode](https://code.visualstudio.com/download)
- [NodeJS](https://nodejs.org/pt-br/download)
- [bcryp](https://sequelize.org/docs/v6/core-concepts/getters-setters-virtuals)
- [express](https://expressjs.com/)
- [Render](https://render.com/)
- [sequelize](https://sequelize.org/docs/v7/getting-started/)
- [Insomnia](https://insomnia.rest/download)
- [MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/windows-installation.html) - Windows
- [MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/macos-installation.html) - MacOS
- [MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/linux-installation.html) - Linux
- [MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/solaris-installation.html) - Solaris
