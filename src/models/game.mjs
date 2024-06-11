import mongoose from 'mongoose';

// Definindo o modelo da API
const GameSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    trailerUrl: { type: String },
    anoLancamento: { type: String },
    genero: { type: String },
    classificacaoEtaria: { type: String },
    plataforma: { type: String }
}, { timestamps: true }); // Adiciona automaticamente campos de timestamp (createdAt e updatedAt)

// Exporta o modelo de jogo. Se já existir um modelo Game, utiliza-o, caso contrário, cria um novo.
export default mongoose.models.Game || mongoose.model('Game', GameSchema);