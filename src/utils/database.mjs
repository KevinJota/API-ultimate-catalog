import mongoose from 'mongoose';

// URI de conexão com o banco de dados MongoDB
const URI = 'mongodb+srv://guzmanalaca:wHPMbWOHuxx1RIac@catalog.q59852s.mongodb.net/';

// Função para estabelecer a conexão com o banco de dados
const databaseConnection = async () => {
    // Se não houver uma conexão global do Mongoose, estabelece uma nova conexão
    if (!global.mongoose) {
        mongoose.set('strict', false); // Desabilita o modo "strict" do Mongoose para evitar erros desnecessários
        global.mongoose = await mongoose.connect(URI); // Conecta-se ao banco de dados usando a URI fornecida
    }
}

export default databaseConnection;
