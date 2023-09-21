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

## Como clonar o projeto    

Antes de começar o procedimento de clonagem do projeto, certifique-se de que tenha o Git Bash instalado em sua máquina

1. Vá ao repositório e clique onde está escrito "<> Code ". Apareceram algumas opções para clonar; Neste caso, usaremos o HTTPS;

2. Copie o código HTTPS clicando no botão logo ao lado direito do código disponibilizado;

3. Com o código copiado, vá até a sua área de trabalho e clique com o botão direito do mouse e vá em "mostrar mais opções"; clique em "Git Bash here/Git Bash aqui";

4. No terminal do git, digite `git clone` e insira o link do repositório clicando com o botão direito do mouse e clicando em "paste/colar" ou utilizando o atalho "Shift + Insert";

5. Pronto! Agora o projeto foi clonado para sua máquina e você pode navegar nele.

## Como rodar o projeto 

Antes de começarmos a rodar o projeto na máquina, certifique-se de ter Node.JS, MySQL Server, algum tipo de software para testes de requsiçaão; Neste caso, foi utilizado o Insomnia; e algum editor de código instalado em sua máquina; Neste caso, utilizaremos o VSCode para execução do projeto.

Em relação ao Node.JS, foi utilizada a versão 18.17.1; Recomenda-se utilizar essa mesma versão, pois caso tente rodar o projeto em outras versões, erros podem ocorrer;

1. Ao abrir o VSCode, clique no primeiro ícone na barra lateral esquerda, que se assemelha a uma folha sobrepondo a outra

2. Após isso, clique em "Open Folder/Abrir pasta" e selecione o local em que o projeto foi clonado; Neste caso, a área de trabalho, e depois selecione o projeto;

3. Após abrir o projeto em sua máquina, vá na parte superior e clique em "Terminal", e vá em "New Terminal/Novo Terminal" ou utilize o atalho Ctrl + Shift + ';

4. Ao abrir o terminal, insira o código "npm i" e pressione enter; Isso instalará todas as dependências necessárias para o projeto em sua máquina a partir do package.json;

5. Após as dependências serem instaladas, digite "npm run start" em seu terminal; Isso começará a rodar o script;

6. Abra o seu MySQL Workbench e conecte-se ao servidor;

7. Em seguida, vá ao canto superior esquerdo e clique em file; e em seguida vá em "Open SQL Script" e selecione o seguinte script: SQL SCRIPT - DATABASE - MENTORIX - VERSÃO 3;
 - 7.1. Ou, você pode utilizar o atalho Ctrl + Shift + O para imediatamente ir para as opções de abrir um script SQL;

7. Abra seu Insomnia e insira o seguinte link na barra superior: https://mentorix.onrender.com/areas-atuacao;

8. Ao invés de "area-atuacao", pode-se colocar a rota(?) desejada;

9. Primeiro, utilize o método POST para criar as informações desejadas;

10. Após isso, use o método GET e insira o id logo após a rota(?) para obter as informaçõe inseridas;

11. Caso queira alterar algo no banco de dados, use p método PUT e insira o id logo após a rota(?) e altere as características desejadas;

12. Utilize o GET com o mesmo ID para visualizar as alterações;

13. Caso queira deletar algo, utilize o método DELETE e coloque o ID para deletar a entidade desejada.

Pronto! Agora você possui uma API desenvolvida seguindo o padrão REST em sua máquina. 

## Links

- https://git-scm.com/                                                                    ----->  Para instalação do Git;
- https://code.visualstudio.com/download                                                  ----->  Para instalação do VSCode;
- https://nodejs.org/pt-br/download                                                       ----->  Para instalação do Node.JS (recomendado a instalação da versão LTS por ser mais estável);
- https://expressjs.com/                                                                  ----->  Documentação do Express;
- https://insomnia.rest/download                                                          ----->  Para instalação do Insomnia;
- https://sequelize.org/docs/v7/getting-started/                                          ----->  Documentação do Sequelize;
- https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/windows-installation.html   ----->  Para instalação do MySQL em Windows;
- https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/macos-installation.html     ----->  Para instalação do MySQL em MacOS;
- https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/linux-installation.html     ----->  Para instalação do MySQL em Linux;
- https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/solaris-installation.html   ----->  Para instalação do MySQL em Solaris;




Feito por devtaw, DaniSodeiro, Hickembick e Hellraiser997.