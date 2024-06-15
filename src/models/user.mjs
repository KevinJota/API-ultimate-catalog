// models/user.mjs

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    favoriteGames: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }]
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
