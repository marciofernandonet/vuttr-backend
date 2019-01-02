const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for VUTTR 
var Vuttr  = new Schema({
    title: String,
    link: String,
    description: String,
    tags: [String]
},
{
    collection: 'vuttr'
});

module.exports = mongoose.model('Vuttr', Vuttr);