const express = require('express');



require('dotenv').config();
require('./config/database')



// Initialize App
const app = express();
app.use(express.json())



// Initialize Auth Routes
app.use('/auth',require('./routes/AuthRoutes'))




app.listen(process.env.PORT || 4040 , () => {
    console.log('App is Running on http://localhost:4040')
})




