const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,  
        required: true,  //validation
    },

    age: {
        type: Number,
        required: true,
    },

    gmail: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('UserModel' , userSchema);