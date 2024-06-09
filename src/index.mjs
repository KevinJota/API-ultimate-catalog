// Importa os módulos necessários
import express        from 'express';
import gameController from './controllers/game.mjs';
import cors           from 'cors';

const app = express(); // Importa o módulo Express.js para criar o servidor
const port = 3002;

// Adiciona middleware para permitir solicitações de qualquer origem
app.use(express.json());
app.use(cors());

app.use('/game', gameController);

// URL de conexão com o Banco do MongoDB
app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});
