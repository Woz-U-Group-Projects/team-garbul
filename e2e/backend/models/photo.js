var mongoose = require('mongoose');

const Schema = mongoose.Schema;

var PhotoSchema = new Schema ({
    description: String,
    
    artist: String
});

module.exports = mongoose.model('Photo', PhotoSchema);