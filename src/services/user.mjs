// services/user.mjs
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.mjs';
import Game from '../models/game.mjs';

// Função para registrar um novo usuário
export const registerUser = async ({ username, email, password }) => {
    // Verifica se o usuário já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('Email já cadastrado');
    }

    // Hash da senha antes de salvar no banco de dados
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria o novo usuário
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    return newUser;
};

// Função para autenticar um usuário
export const authenticateUser = async (email, password) => {
    // Verifica se o usuário existe
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Credenciais inválidas');
    }

    // Verifica se a senha está correta
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw new Error('Credenciais inválidas');
    }

    // Gera um token JWT
    const token = jwt.sign({ userId: user._id }, 'secreto', { expiresIn: '1h' });

    return { token, user };
};

// Função para obter um usuário pelo ID
export const getUserById = async (userId) => {
    const user = await User.findById(userId);
    return user;
};

// Função para adicionar um jogo aos favoritos do usuário
export const addFavoriteGame = async (userId, gameId) => {
    // Verifica se o usuário existe
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('Usuário não encontrado');
    }

    // Verifica se o jogo existe
    const game = await Game.findById(gameId);
    if (!game) {
        throw new Error('Jogo não encontrado');
    }

    // Adiciona o jogo aos favoritos, se ainda não estiver na lista
    if (!user.favoriteGames.includes(gameId)) {
        user.favoriteGames.push(gameId);
        await user.save();
    }

    return user;
};

// Função para obter todos os jogos favoritos de um usuário
export const getUserFavorites = async (userId) => {
    // Verifica se o usuário existe
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('Usuário não encontrado');
    }

    // Busca os jogos favoritos do usuário
    const favoriteGames = await Game.find({ _id: { $in: user.favoriteGames } });
    return favoriteGames;
};

// Função para remover um jogo da lista de favoritos do usuário
export const removeFavoriteGame = async (userId, gameId) => {
    // Verifica se o usuário existe
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('Usuário não encontrado');
    }

    // Remove o jogo da lista de favoritos
    user.favoriteGames = user.favoriteGames.filter((game) => game.toString() !== gameId);
    await user.save();

    return user;
};

// Função para obter todos os usuários
export const getAllUsers = async () => {
    const users = await User.find();
    return users;
};

// Função para deletar um usuário pelo ID
export const deleteUserById = async (userId) => {
    const deletedUser = await User.findByIdAndDelete(userId);
    return deletedUser;
};
