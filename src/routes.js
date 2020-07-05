const express = require('express');
const routes = express.Router();

const CustomerController = require('./controllers/cutomerController');

routes.get('/Customers',CustomerController.getCustomers);


module.exports = routes;