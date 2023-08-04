const mongoose = require('mongoose')
const { Schema } = mongoose;

const itemSchema = new Schema({
    name: String,
    status: String,
    ordering: Number
});

module.exports = mongoose.model('Items', itemSchema)