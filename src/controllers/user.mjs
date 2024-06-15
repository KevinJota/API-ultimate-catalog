// controllers/user.mjs

import { Router } from 'express';
import { registerUser, authenticateUser, getUserById, addFavoriteGame, getAllUsers, deleteUserById, getUserFavorites, removeFavoriteGame } from '../services/user.mjs';

const router = Router();

// Rota para registro de usuário
router.post('/register', async (req, res) => {
    try {
        const newUser = await registerUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rota para autenticação de usuário (login)
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const { token, user } = await authenticateUser(email, password);
        res.json({ token, user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rota para obter todos os usuários
router.get('/', async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rota para obter dados do usuário pelo ID
router.get('/:id', async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rota para adicionar um jogo aos favoritos do usuário
router.post('/:userId/favorites/:gameId', async (req, res) => {
    const { userId, gameId } = req.params;

    try {
        const updatedUser = await addFavoriteGame(userId, gameId);
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rota para obter todos os jogos favoritos de um usuário
router.get('/:userId/favorites', async (req, res) => {
    const { userId } = req.params;

    try {
        const favorites = await getUserFavorites(userId);
        res.json(favorites);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rota para remover um jogo da lista de favoritos de um usuário
router.delete('/:userId/favorites/:gameId', async (req, res) => {
    const { userId, gameId } = req.params;

    try {
        const updatedUser = await removeFavoriteGame(userId, gameId);
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rota para deletar usuário pelo ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await deleteUserById(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
