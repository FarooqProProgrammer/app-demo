const mongoose = require('mongoose')
require('dotenv').config();

async function main() {
    await mongoose.connect('mongodb+srv://farooq123:farooq123@cluster0.ijdh8yd.mongodb.net/ecommerce?retryWrites=true&w=majority');
}

main()