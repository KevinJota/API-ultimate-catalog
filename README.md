# API de Catálogo de Jogos

Esta é uma API RESTful construída com Node.js, Express.js e MongoDB para gerenciar um catálogo de jogos. A API permite a criação, listagem, busca, atualização e exclusão de jogos, além de integração com usuários para gestão de jogos favoritos..

## Funcionalidades Principais

- Listar todos os jogos
- Buscar jogos por ID, título, gênero, plataforma, classificação etária, ano de lançamento ou data de criação
- Adicionar um novo jogo
- Atualizar informações de um jogo existente
- Excluir um jogo pelo ID
- Adicionar/registrar um novo Usuario
- Autenticar Login de usuario
- Listar todos os Usuarios
- Buscar usuario pelo ID
- Excluir usuario pelo ID
- Listar, Adicionar, Exluir jogos da lista de favoritos pelo ID de um Usuario e seus jogos

## Configuração

1. **Pré-requisitos:**
   - Node.js e npm instalados
   - MongoDB instalado e em execução

2. **Instalação:**
   - Clone este repositório: `git clone https://github.com/KevinJota/API-ultimate-catalog.git`
   - Navegue até o diretório do projeto: `cd API-ultimate-catalog`
   - Instale as dependências: `npm install`

3. **Configuração do Banco de Dados:**
   - Certifique-se de que o MongoDB está em execução localmente ou defina a URI de conexão no arquivo `src/utils/database.mjs`

4. **Execução:**
   - Inicie o servidor: `node src/index.mjs`
   - A aplicação estará disponível em: `http://localhost:3002`

## Endpoints da API

- **GET /game:** Retorna a lista de todos os jogos.
- **GET /game/:id:** Retorna um jogo pelo ID.
- **GET /game/titulo/:title:** Retorna jogos pelo título.
- **GET /game/genero/:genero:** Retorna jogos pelo gênero.
- **GET /game/plataforma/:plataforma:** Retorna jogos pela plataforma.
- **GET /game/classificacaoEtaria/:classificacaoEtaria:** Retorna jogos pela classificação etária.
- **GET /game/ano/:anoLancamento:** Retorna jogos pelo ano de lançamento.
- **GET /game/data/:ano/:mes/:dia:** Retorna jogos pela data de criação (dia específico).
- **GET /game/data/:ano/:mes:** Retorna jogos pela data de criação (mês específico).
- **GET /game/data/:ano:** Retorna jogos pela data de criação (ano específico).
- **POST /game:** Adiciona um novo jogo.
- **DELETE /game/:id:** Exclui um jogo pelo ID.
- **PUT /game/:id:** Atualiza um jogo pelo ID.
- **POST /user/register:** Registra um novo usuário.
- **POST /user/login:** Autentica o login do usuário.
- **GET /user/:id:** Obtém dados do usuário pelo ID.
- **GET /user:** Obtém dados de todos os usuarios.
- **POST /user/:userId/favorites/:gameId:** Adiciona um jogo aos favoritos do usuário.
- **GET /user/:userId/favorites:** Lista todos os jogos favoritos de um usuário.
- **DELETE /user/:userId/favorites/:gameId:** Remove um jogo da lista de favoritos do usuário.
- **DELETE /user/:id:** Exclui um usuário pelo ID

## Créditos

Este projeto foi concebido durante os meses de Maio e Junho de 2024 por Kevin Alaca, Jardel Monte e Heitor Muniz, alunos do curso técnico de Desenvolvimento de Sistemas na Escola SENAI Suíço-Brasileira Paulo Ernesto Tolle, localizada em Santo Amaro, São Paulo.
