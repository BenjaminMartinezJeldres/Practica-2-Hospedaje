const Empleado = require('../models/empleado');

const createEmpleado = (req, res) => {
    const { name,lastname,rut,correo,telefono } = req.body;
    const newEmpleado = new Empleado({
        name,
        lastname,
        rut,
        correo,
        telefono
    });
    newEmpleado.save((err, empleado) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear al Empleado" })
        }
        return res.status(201).send(empleado)
    })
}
const getEmpleados = (req, res) => {
    Empleado.find({}, (err, empleados) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener los Empleados" })
        }
        return res.status(200).send(empleados)
    })
}

const getSpecificEmpleado = (req, res) => {
    const { id } = req.params;
    Empleado.findById(id).populate({ path: 'empleado' }).exec((err, empleado) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener Empleado" })
        }
        if (!empleado) {
            return res.status(404).send({ message: "Empleado no encontrada" })
        }
        return res.status(200).send(empleado)
    })
}

const updateEmpleado = (req, res) => {
    const { id } = req.params;
    Empleado.findByIdAndUpdate(id, req.body, (err, empleados) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener al empleado" })
        }
        if (!empleados) {
            return res.status(404).send({ message: "Empleado no encontrado" })
        }
        return res.status(200).send(empleados)
    })
}

const deleteEmpleado = (req, res) => {
    const { id } = req.params;
    Empleado.findByIdAndDelete(id, (err, empleados) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener al Empleado" })
        }
        if (!empleados) {
            return res.status(404).send({ message: "Empleado no encontrada" })
        }
        return res.status(200).send(empleados)
    })
}


module.exports = {
    createEmpleado,
    getEmpleados,
    getSpecificEmpleado,
    updateEmpleado,
    deleteEmpleado
}