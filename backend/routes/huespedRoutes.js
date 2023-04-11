const express = require('express');
const api = express.Router();
const huespedController = require('../controllers/huespedController');

api.post('/huesped', huespedController.createHuesped);
api.get('/huespedes', huespedController.getHuespedes);
api.get('/huesped/search/:id', huespedController.getSpecificHuesped);
api.put('/huesped/update/:id', huespedController.updateHuesped);
api.delete('/huesped/delete/:id', huespedController.deleteHuesped);

module.exports = api;