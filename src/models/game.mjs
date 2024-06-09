import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    trailerUrl: { type: String },
    anoLancamento: { type: String },
    genero: { type: String},
    classificacaoEtaria: { type: String},
    plataforma: { type: String }
}, { timestamps: true });

export default mongoose.models.Game || mongoose.model('Game', GameSchema);
