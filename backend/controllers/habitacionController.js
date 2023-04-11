const Habitacion = require('../models/habitacion');
const Service = require('../models/service');



const createHabitacion = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const newHabitacion = new Habitacion({
        name
    })

    newHabitacion.save((err, habitacion) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido crear la habitacion" })
        }
        Service.findByIdAndUpdate(id, { habitacion: habitacion }, (err, service) => {
            if (err) {
                return res.status(400).send({ message: "No se ha podido crear la Habitacion" })
            }
            if (!service) {
                return res.status(404).send({ message: "No existe el Servicio " })
            }
            return res.status(201).send(habitacion)
        })
    })

}





const getHabitaciones = (req, res) => {
    Habitacion.find({}, (err, habitacion) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido obtener las habitaciones" })
        }
        return res.status(201).send(habitacion)
    })
}

const getSpecificHabitacion = (req, res) => {
    const { id } = req.params
    Habitacion.findById(id, (err, habitacion) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido buscar la habitacion" })
        }
        if (!habitacion) {
            return res.status(404).send({ message: "No se encontro esa habitacion" })
        }
        return res.status(201).send(habitacion)
    })
}

const updateHabitacion = (req, res) => {
    const { id } = req.params
    Habitacion.findByIdAndUpdate(id, req.body, (err, habitacion) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido modificar la habitacion" })
        }
        if (!habitacion) {
            return res.status(404).send({ message: "No se encontro esa Habitacion" })
        }
        return res.status(201).send(habitacion)
    })
}

const deleteHabitacion = (req, res) => {
    const { id } = req.params
    Habitacion.findByIdAndDelete(id, (err, habitacion) => {
        if (err) {
            return res.status(400).send({ message: "No se ha podido eliminar la Habitacion" })
        }
        if (!habitacion) {
            return res.status(404).send({ message: "No se encontro esa Habitacion" })
        }
        return res.status(201).send(habitacion)
    })
}

module.exports = {
    createHabitacion,
    getHabitaciones,
    getSpecificHabitacion,
    updateHabitacion,
    deleteHabitacion
}