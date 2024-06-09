import databaseConnection from '../utils/database.mjs';
import Game from '../models/game.mjs';

export const gamesList = async () => {
    await databaseConnection();
    const games = await Game.find();
    return games;
}

export const createGame = async (game) => {
    //console.log(jogo);
    await databaseConnection();
    const createdGame = await Game.create(game);
    return createdGame;
}