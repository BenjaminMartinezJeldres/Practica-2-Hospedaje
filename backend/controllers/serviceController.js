const Service = require('../models/service');

const createService = (req, res) => {
    const { name, price, description} = req.body;
    const newService = new Service({
        name,
        price,
        description,
    });
    newService.save((err, service) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear el servicio" })
        }
        return res.status(201).send(service)
    })
}
const getServices = (req, res) => {
    Service.find({}, (err, services) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener los servicios" })
        }
        return res.status(200).send(services)
    })
}

const getSpecificService = (req, res) => {
    const { id } = req.params;
    Service.findById(id).populate({ path: 'category' }).exec((err, service) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el servicio" })
        }
        if (!service) {
            return res.status(404).send({ message: "Servicio no encontrado" })
        }
        return res.status(200).send(service)
    })
}

const updateService = (req, res) => {
    const { id } = req.params;
    Service.findByIdAndUpdate(id, req.body, (err, services) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el servicio" })
        }
        if (!services) {
            return res.status(404).send({ message: "Servicio no encontrado" })
        }
        return res.status(200).send(services)
    })
}

const deleteService = (req, res) => {
    const { id } = req.params;
    Service.findByIdAndDelete(id, (err, services) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el servicio" })
        }
        if (!services) {
            return res.status(404).send({ message: "Servicio no encontrado" })
        }
        return res.status(200).send(services)
    })
}

//const login=(req,res)=>{
  //  return res.status(200).send({message:"Se ha logeado correctamente"})

//}
module.exports = {
    createService,
    getServices,
    getSpecificService,
    updateService,
    deleteService,
    //login
}