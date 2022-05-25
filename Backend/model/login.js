const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
    }
});

module.exports = mongoose.model('login', loginSchema);