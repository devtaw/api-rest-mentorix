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
crypt, express, mysql2 e sequelize


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

## Agendamentos

#### POST - Rota: '/area-agendamento'

_A rota post cria area agendamento_

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
	"Sucesso": " area agendamento criado com sucesso!"
}
```

#### GET - Rota: '/area-agendamento'

_A rota get busca todos as areas cadastradas_

###### Saída

````bash
{
	"id": 14,
	"nome": "Engenharia",
	"descricaoArea": "Aplica princípios científicos e matemáticos para projetar, construir e melhorar sistemas, estruturas e dispositivos",
	"fotoAreaAtuacao": "https://www.univille.edu.br/community/novoportal/VirtualDisk.html/downloadDirect/1462802/FA7-engenharia-mecanica-960x750.jpg",
	"createdAt": "2023-09-20",
	"updatedAt": "2023-09-20"
}

#### GET - Rota: '/area-agendamento'
 * A rota get id busca o Agendamentos  pelo id informado*

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
````

#### DELETE - Rota: '/area-atuacao/:id'

_A rota DELETE id deleta a area-atuacao pelo id informado_

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

#### PUT - Rota: '/area-atuacao/:id'

_A rota PUT id atualiza area-atuacao pelo id informado_

###### Ex rota:

```bash
{
"id": 18,
"nome": "Engenharia",
"descricaoArea": "Aplica princípios científicos e matemáticos para projetar, construir e melhorar sistemas, estruturas e dispositivos",
"fotoAreaAtuacao": "https://www.univille.edu.br/community/novoportal/VirtualDisk.html/downloadDirect/1462802/FA7-engenharia-mecanica-960x750.jpg",
"createdAt": "2023-09-20",
"updatedAt": "2023-09-20"
}

````bash

###### Saída

```bash
{

    }
````

## Agendamentos

#### POST - Rota: '/agendamento'

_A rota post cria agendamento_

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
	"Sucesso": "agendamento criado com sucesso!"
}
```

#### GET - Rota: '/agendamento'

_A rota get busca todos as agendamento cadastradas_

###### Saída

````bash
{
	"id": 14,
	"nome": "Engenharia",
	"descricaoArea": "Aplica princípios científicos e matemáticos para projetar, construir e melhorar sistemas, estruturas e dispositivos",
	"fotoAreaAtuacao": "https://www.univille.edu.br/community/novoportal/VirtualDisk.html/downloadDirect/1462802/FA7-engenharia-mecanica-960x750.jpg",
	"createdAt": "2023-09-20",
	"updatedAt": "2023-09-20"
}

#### GET - Rota: '/agendamento'
 * A rota get id busca o Agendamentos  pelo id informado*

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
````

#### DELETE - Rota: '/agendamento/:id'

_A rota DELETE id deleta a agendamento pelo id informado_

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

#### PUT - Rota: '/agendamento/:id'

_A rota PUT id atualiza agendamento pelo id informado_

###### Ex rota:

```bash
{
	"id": 18,
	"nome": "Engenharia",
	"descricaoArea": "Aplica princípios científicos e matemáticos para projetar, construir e melhorar sistemas, estruturas e dispositivos",
	"fotoAreaAtuacao": "https://www.univille.edu.br/community/novoportal/VirtualDisk.html/downloadDirect/1462802/FA7-engenharia-mecanica-960x750.jpg",
	"createdAt": "2023-09-20",
	"updatedAt": "2023-09-20"
}

```

###### Saída

```bash
{

    }
````

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


## Autenticação 

#### POST - Rota: '/autenticacao'

_A rota cria autenticação_ 


## Especialidade

#### GET - Rota '/especialidade'

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
    
#### GET ID - Rota '/especialidade/:id' 
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
#### POST - Rota '/especialidade'
```bash
{
    "id": 3,
    "nome": "Segurança da Informação",
    "descricao": "area que se concentra em garantir a segurança e proteção dos sistemas de informação",
    "foto": "https://i.ytimg.com/vi/RnsYE2eZqkA/maxresdefault.jpg",
    "createdAt": "2023-09-21T00:00:00.000Z",
    "updatedAt": "2023-09-22T14:06:51.891Z"
}
```
#### PUT - Rota '/especialidade/:id'
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
#### DELETE - Rota '/especialidade/:id'
Pesquisar por ID 
https://mentorix.onrender.com/especialidades/3

Depois do Delete, pesquisar novamente por id .

tratamento de erro

```bash
{
	"messagem": "Especialidade não encontrada"
}
```

## Mentores

#### POST - Rota: '/mentor'

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

#### GET - Rota: '/mentor'

_A rota get busca todos os mentores_

###### Saída

````bash
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

#### GET - Rota: '/mentor'
 * A rota get id busca o mentor pelo id informado*

###### Ex rota:
 https://mentorix.onrender.com/areas-atuacao/13
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
````

#### DELETE - Rota: '/mentor/:id'

_A rota DELETE id deleta o mentor pelo id informado_

###### Ex rota:

https://mentorix.onrender.com/areas-atuacao/13

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

#### PUT - Rota: '/mentor/:id'

_A rota PUT id atualiza mentor pelo id informado_



###### Ex rota:

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

###### Saída

```bash
{

    }
````


## Mentor Especialidade

#### POST - Rota: '/mentor-especialidade'

_A rota post cria mentor-especialidade_
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

#### GET - Rota: '/mentor-especialidade'

_A rota get busca todos as especialidades_

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

#### GET - Rota: '/mentor-especialidade'
 * A rota get id busca a especialidade do mentor pelo id informado*

###### Ex rota:
 https://mentorix.onrender.com/areas-atuacao/13
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

#### DELETE - Rota: '/mentor-especialidade/:id'

_A rota DELETE id deleta a especialidade do mentor pelo id informado_

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

#### PUT - Rota: '/mentor-especialidade/:id'

_A rota PUT id atualiza mentor-especialidade pelo id informado_

###### Ex rota:

```bash

        {
		"id": 13,
		"mentor_id": 7,
		"especialidade_id": 9,
		"createdAt": "2023-09-20",
		"updatedAt": "2023-09-20"
	 }

```

````bash

###### Saída

```bash
{

    }
````



## Mentorados

#### POST - Rota: '/mentorado'

_A rota post cria area mentorado_

###### Entrada

```bash
{
	"id": 69,
		"nome": "Roberto Guedes",
		"dataNascimento": "10/02/2000",
		"telefone": "041945621059",
		"oQueBusco": "Obter mais experiência em programação, especialmente em front-end"
		"createdAt": "2023-09-20",
		"updatedAt": "2023-09-20"
}

```


###### Saída

```bash
{
	"Sucesso": " Mentorado criado com sucesso!"
}
```

#### GET - Rota: '/mentorado'

_A rota get busca todos os mentorados_


###### Saída

```bash
{
	"id": 69,
		"nome": "Roberto Guedes",
		"dataNascimento": "10/02/2000",
		"telefone": "041945621059",
		"oQueBusco": "Obter mais experiência em programação, especialmente em front-end"
		"createdAt": "2023-09-20",
		"updatedAt": "2023-09-20"
}

```

#### GET - Rota: '/mentorado'
 * A rota get id busca o mentorado pelo id informado*

###### Ex rota:
 https://mentorix.onrender.com/areas-atuacao/13
###### Saída

```bash
{
	"id": 69,
		"nome": "Roberto Guedes",
		"dataNascimento": "10/02/2000",
		"telefone": "041945621059",
		"oQueBusco": "Obter mais experiência em programação, especialmente em front-end"
		"createdAt": "2023-09-20",
		"updatedAt": "2023-09-20"
}

```

#### DELETE - Rota: '/mentorado/:id'

_A rota DELETE id deleta o mentorado pelo id informado_

###### Ex rota:

https://mentorix.onrender.com/areas-atuacao/13

###### Saída

```bash
{
	 message: "Mentorado deletado com sucesso"
}

```

#### PUT - Rota: '/mentorado/:id'

_A rota PUT id atualiza o mentorado pelo id informado_

###### Ex rota:


```bash
{
	"id": 69,
		"nome": "Roberto Guedes",
		"dataNascimento": "15/12/2000",
		"telefone": "041945521859",
		"oQueBusco": "Obter mais experiência em programação, especialmente em front-end"
		"createdAt": "2023-09-20",
		"updatedAt": "2023-09-20"
}

```

````bash

###### Saída

```bash
{

    }
````



## Referência

- [Git](https://git-scm.com/)
- [VSCode](https://code.visualstudio.com/download)
- [NodeJS](https://nodejs.org/pt-br/download) - Recomenda-se a versão LTS por mais estável
- [dotenv](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
- [express](https://expressjs.com/)
- [Render](https://render.com/)
- [sequelize](https://sequelize.org/docs/v7/getting-started/)
- [Insomnia](https://insomnia.rest/download)
- [MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/windows-installation.html) - Windows
- [MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/macos-installation.html) - MacOS
- [MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/linux-installation.html) - Linux
- [MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/solaris-installation.html) - Solaris





