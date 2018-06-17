const mongoose = require('mongoose');

const assetsSchema = new mongoose.Schema({
    title: String,
    date: {type: Date, default: Date.now},
    imageUrl: String
});

module.exports = mongoose.model('Assets', assetsSchema);