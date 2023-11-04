const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const cors = require("cors")
const helmet = require("helmet");
const compression = require('compression');
const { rateLimit } = require('express-rate-limit')

require('dotenv').config();
require('./config/database')



// Initialize App
const app = express();
app.use(express.json())

// Morgan for HTTP request logging
app.use(morgan('combined'));

// Initiliaze Cors
app.use(cors())

// Use HELMET
app.use(helmet());

// Initiaze Compression
app.use(compression())



// Limit Api Request
const limiter = rateLimit({
    windowMs:1 * 60 * 1000,
    limit: 100,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
})
app.use(limiter)


// Initiliaze Express Session
app.use(session({
    secret: 'app-1',
    resave: false,
    saveUninitialized: true,
}));



// Initialize Auth Routes
app.use('/auth', require('./routes/AuthRoutes'))




app.listen(process.env.PORT || 4040, () => {
    console.log('App is Running on http://localhost:4040')
})




