const express = require('express');
const { Register } = require('../controller/AuthController');


const Router = express.Router();


Router.post('/register',Register)


module.exports = Router;
