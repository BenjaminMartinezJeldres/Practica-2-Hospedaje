const express = require('express');
const api = express.Router();
const empleadoController = require('../controllers/empleadoController');

api.post('/empleado', empleadoController.createEmpleado);
api.get('/empleados', empleadoController.getEmpleados);
api.get('/empleado/search/:id', empleadoController.getSpecificEmpleado);
api.put('/empleado/update/:id', empleadoController.updateEmpleado);
api.delete('/empleado/delete/:id', empleadoController.deleteEmpleado);

module.exports = api;