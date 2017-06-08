var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NotesSchema = new Schema({
    description: String,
    createdDate: Date,
    author: String,
});

module.exports = mongoose.model('Note', NotesSchema);
