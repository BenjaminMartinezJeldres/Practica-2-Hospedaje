const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HuespedSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    rut: {
        type: String,
        required: true
    },
    habitacion: {
        type: Number,
        required: true
    },
    company: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('huesped', HuespedSchema);