const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpleadoSchema = new Schema({
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
    correo: {
        type: String,
        required: true,

    },
    telefono: {
        type: Number,
        required: true,

    }
});

module.exports = mongoose.model('empleado', EmpleadoSchema);