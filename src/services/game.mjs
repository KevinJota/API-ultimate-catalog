import databaseConnection from '../utils/database.mjs';
import Game from '../models/game.mjs';

// Função para encontrar e retornar todos os jogos contidos no banco de dados
export const gamesList = async () => {
    await databaseConnection();
    const games = await Game.find();
    return games;
}

// Função para criar um novo jogo no banco de dados com os dados fornecidos
export const createGame = async (game) => {
    await databaseConnection();
    const createdGame = await Game.create(game);
    return createdGame;
}