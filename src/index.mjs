import express from 'express';
import gameController from './controllers/game.mjs';
import userController from './controllers/user.mjs';
import cors from 'cors';
import databaseConnection from './utils/database.mjs';

const app = express();
const port = 3002;

// Middleware para JSON e CORS
app.use(express.json());
app.use(cors());

// Conexão com o banco de dados MongoDB
databaseConnection();

// Rotas para os jogos
app.use('/game', gameController);

// Rotas para os usuários
app.use('/user', userController);

// Inicialização do servidor
app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
});
