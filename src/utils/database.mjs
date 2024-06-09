import mongoose from 'mongoose';

const URI = 'mongodb+srv://guzmanalaca:wHPMbWOHuxx1RIac@catalog.q59852s.mongodb.net/';

const databaseConnection = async () => {
    if (!global.mongoose) {
        mongoose.set('strict', false);
        global.mongoose = await mongoose.connect(URI);
    }
}

export default databaseConnection; // Certifique-se de exportar a função como 'default'
