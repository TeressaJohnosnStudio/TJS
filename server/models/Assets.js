const mongoose = require('mongoose');

const assetsSchema = new mongoose.Schema({
    title: String,
    date: {type: Date, default: Date.now},
    content: String,
    imageUrl: String
});

module.exports = mongoose.model('Assets', assetsSchema);