
const express = require('express');

const route = express.Router();

const frontcontrollers = require('../controllers/frontcontroller');

route.use('/addproduct',frontcontrollers.addproduct);

route.use('/products',frontcontrollers.products);

module.exports = {
    "route": route,
}