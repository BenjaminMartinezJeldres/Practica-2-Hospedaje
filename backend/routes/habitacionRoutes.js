const express = require('express')
const api = express.Router()
const habitacionController = require('../controllers/habitacionController')

api.post('/habitacion/:id', habitacionController.createHabitacion)
api.get('/habitaciones', habitacionController.getHabitaciones)
api.get('/habitacion/search/:id',habitacionController.getSpecificHabitacion)
api.put('/habitacion/update/:id', habitacionController.updateHabitacion)
api.delete('/habitacion/delete/:id', habitacionController.deleteHabitacion)

module.exports = api;