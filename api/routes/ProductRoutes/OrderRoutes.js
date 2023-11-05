const express = require('express');
const { AddOrder, AllOrder } = require('../../controller/ProductController/OrderController');

const Router = express.Router();


Router.get('/all-orders',AllOrder)
Router.post("/add-order",AddOrder)




module.exports = Router;