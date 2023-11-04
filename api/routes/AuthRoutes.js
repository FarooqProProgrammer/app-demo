const express = require('express');
const { Register, Login, AllUsers } = require('../controller/AuthController');


const Router = express.Router();




Router.get('/users',AllUsers)
Router.post('/register',Register)
Router.post('/login',Login)

module.exports = Router;
