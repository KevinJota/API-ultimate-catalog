# API de Catálogo de Jogos

Esta é uma API RESTful construída com Node.js, Express.js e MongoDB para gerenciar um catálogo de jogos. A API permite a criação, listagem, busca, atualização e exclusão de jogos.

## Funcionalidades Principais

- Listar todos os jogos
- Buscar jogos por ID, título, gênero, plataforma, classificação etária, ano de lançamento ou data de criação
- Adicionar um novo jogo
- Atualizar informações de um jogo existente
- Excluir um jogo pelo ID

## Configuração

1. **Pré-requisitos:**
   - Node.js e npm instalados
   - MongoDB instalado e em execução

2. **Instalação:**
   - Clone este repositório: `git clone https://github.com/KevinJota/API-ultimate-catalog/git`
   - Navegue até o diretório do projeto: `cd nome-do-repositorio`
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

## Créditos

Este projeto foi elaborado por Kevin J, Jardel e Heitor M da Escola SENAI Suíço-Brasileira Paulo Ernesto Tolle, Santo Amaro 2024.
