var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    name: String,
    course: String,
    age: Number
});

module.exports = mongoose.model('Student', StudentSchema);