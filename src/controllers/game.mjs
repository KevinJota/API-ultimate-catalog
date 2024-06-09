import { Router } from 'express';
import { gamesList, createGame } from '../services/game.mjs';
import Game from '../models/game.mjs'; 

const router = Router();

router.get('/', async (req, res) => {
    const games = await gamesList();
    res.send(games);
});

router.get('/:_id', async (req, res) => {
    try {
        const game = await Game.findById(req.params._id);
        if (!game) {
            return res.status(404).send('Jogo não encontrado');
        }
        res.send(game);
    } catch (error) {
        console.error('Erro ao buscar o jogo:', error);
        res.status(500).send('Erro ao buscar o jogo');
    }
});

router.get('/titulo/:title', async (req, res) => {
    const titulo = req.params.title;
    try {
        const games = await Game.find({ title: { $regex: new RegExp(titulo, 'i') } });
        res.send(games);
    } catch (error) {
        console.error('Erro ao buscar os jogos:', error);
        res.status(500).send('Erro ao buscar os jogos');
    }
});

router.get('/genero/:genero', async (req, res) => {
    const genero = req.params.genero;
    try {
        const games = await Game.find({ genero: { $regex: new RegExp(genero, 'i') } });
        res.send(games);
    } catch (error) {
        console.error('Erro ao buscar os jogos:', error);
        res.status(500).send('Erro ao buscar os jogos');
    }
});

router.get('/plataforma/:plataforma', async (req, res) => {
    const plataforma = req.params.plataforma;
    try {
        const games = await Game.find({ plataforma: { $regex: new RegExp(plataforma, 'i') } });
        res.send(games);
    } catch (error) {
        console.error('Erro ao buscar os jogos:', error);
        res.status(500).send('Erro ao buscar os jogos');
    }
});

router.get('/classificacaoEtaria/:classificacaoEtaria', async (req, res) => {
    const classificacaoEtaria = req.params.classificacaoEtaria;
    try {
        const games = await Game.find({ classificacaoEtaria: { $regex: new RegExp(classificacaoEtaria, 'i') } });
        res.send(games);
    } catch (error) {
        console.error('Erro ao buscar os jogos:', error);
        res.status(500).send('Erro ao buscar os jogos');
    }
});

router.get('/ano/:anoLancamento', async (req, res) => {
    const anoLancamento = req.params.anoLancamento;
    try {
        const games = await Game.find({ anoLancamento: anoLancamento });
        res.send(games);
    } catch (error) {
        console.error('Erro ao buscar os jogos:', error);
        res.status(500).send('Erro ao buscar os jogos');
    }
});

// Rota para buscar todos os itens adicionados/atualizados em determinado dia
router.get('/data/:ano/:mes/:dia', async (req, res) => {
    const { ano, mes, dia } = req.params;
    const dataInicial = new Date(ano, mes - 1, dia);
    const dataFinal = new Date(ano, mes - 1, dia + 1); // Para buscar até o final do dia
    try {
        const games = await Game.find({
            createdAt: { $gte: dataInicial, $lt: dataFinal }
        });
        res.send(games);
    } catch (error) {
        console.error('Erro ao buscar os jogos:', error);
        res.status(500).send('Erro ao buscar os jogos');
    }
});

// Rota para buscar todos os itens adicionados/atualizados em determinado mês
router.get('/data/:ano/:mes', async (req, res) => {
    const { ano, mes } = req.params;
    const dataInicial = new Date(ano, mes - 1, 1);
    const dataFinal = new Date(ano, mes, 1); // Para buscar até o final do mês
    try {
        const games = await Game.find({
            createdAt: { $gte: dataInicial, $lt: dataFinal }
        });
        res.send(games);
    } catch (error) {
        console.error('Erro ao buscar os jogos:', error);
        res.status(500).send('Erro ao buscar os jogos');
    }
});

// Rota para buscar todos os itens adicionados/atualizados em determinado ano
router.get('/data/:ano', async (req, res) => {
    const { ano } = req.params;
    const dataInicial = new Date(ano, 0, 1);
    const dataFinal = new Date(Number(ano) + 1, 0, 1); // Para buscar até o final do ano
    try {
        const games = await Game.find({
            createdAt: { $gte: dataInicial, $lt: dataFinal }
        });
        res.send(games);
    } catch (error) {
        console.error('Erro ao buscar os jogos:', error);
        res.status(500).send('Erro ao buscar os jogos');
    }
});

router.post('/', async (req, res) => {
    const game = await createGame(req.body)
    res.status(201).send(game);
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedGame = await Game.findByIdAndDelete(req.params.id);
        if (!deletedGame) {
            return res.status(404).send('Jogo não encontrado');
        }
        res.send('Jogo excluído com sucesso!');
    } catch (error) {
        console.error('Erro ao excluir o jogo:', error);
        res.status(500).send('Erro ao excluir o jogo');
    }
});

router.put('/:id', async (req, res) => {
    const game = await Game.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        trailerUrl: req.body.trailerUrl,
        anoLancamento: req.body.anoLancamento,
        genero: req.body.genero,
        classificacaoEtaria: req.body.classificacaoEtaria,
        plataforma: req.body.plataforma
    }, {
        new: true
    });
    res.send(game);
});

export default router;
