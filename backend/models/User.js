
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean, 
        default: false,
        required: true,
    }
})

module.exports = { User: mongoose.model('user', UserSchema) };