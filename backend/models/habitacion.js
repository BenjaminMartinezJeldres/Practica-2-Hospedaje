const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const HabitacionSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('habitacion', HabitacionSchema);