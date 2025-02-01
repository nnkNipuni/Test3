const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerUser = mongoose.model('login', new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
}));

module.exports = registerUser; // Export the model directly