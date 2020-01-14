const mongoose = require('mongoose');

const VuttrSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: [String]
});

module.exports = mongoose.model('Vuttr', VuttrSchema);