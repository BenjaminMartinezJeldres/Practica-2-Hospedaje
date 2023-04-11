const Huesped = require('../models/huesped');


const createHuesped = (req, res) => {
    const { name,lastname, rut,habitacion,company } = req.body;
    const newHuesped = new Huesped({
        name,
        lastname,
        rut,
        habitacion,
        company
    });
    newHuesped.save((err, huesped) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear al Huesped" })
        }
        return res.status(201).send(huesped)
    })
}
const getHuespedes = (req, res) => {
    Huesped.find({}, (err, huespedes) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener a los Huespedes" })
        }
        return res.status(200).send(huespedes)
    })
}

const getSpecificHuesped = (req, res) => {
    const { id } = req.params;
    Huesped.findById(id).populate({ path: 'habitacion' }).exec((err, huesped) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener al Huesped" })
        }
        if (!huesped) {
            return res.status(404).send({ message: "Huesped no encontrada" })
        }
        return res.status(200).send(huesped)
    })
}

const updateHuesped = (req, res) => {
    const { id } = req.params;
    Huesped.findByIdAndUpdate(id, req.body, (err, huespedes) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener al huespeda" })
        }
        if (!huespedes) {
            return res.status(404).send({ message: "huesped no encontrado" })
        }
        return res.status(200).send(huespedes)
    })
}

const deleteHuesped = (req, res) => {
    const { id } = req.params;
    Huesped.findByIdAndDelete(id, (err, huespedes) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener al huesped" })
        }
        if (!huespedes) {
            return res.status(404).send({ message: "huesped no encontrado" })
        }
        return res.status(200).send(huespedes)
    })
}


module.exports = {
    createHuesped,
    getHuespedes,
    getSpecificHuesped,
    updateHuesped,
    deleteHuesped
}