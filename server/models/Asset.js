const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
    title: String,
    date: {type: Date, default: Date.now},
    imageUrl: String
});

module.exports = mongoose.model('Asset', assetSchema);