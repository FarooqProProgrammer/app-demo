const mongoose = require('mongoose')


const AuthSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
            required: true,
            unique: true,
        },
        UserName: {
            type: String,
            required: true,
            unique: true,
        },
        Password: {
            type: String,
            required: true,
            unique: true,
        }
    }, { timestamps: true }
)

const AuthModel = mongoose.model('Auth',AuthSchema)
module.exports = [
    AuthModel
]