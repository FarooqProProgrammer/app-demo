const mongoose = require('mongoose')


const OrderSchema = new mongoose.Schema(
    {
        CustomerName: {
            type: String,
            required: true,
        },
        DateOrder: {
            type: String,
            required: true,
            unique: true,
        },
        PurchaseProduct: {
            type: String,
            required: true,
            unique: true,
        },
        TotalPrice: {
            type: String,
            required: true,
            unique: true,
        },
        Status:{
            required:true,
            default:'On Hold',
            type:String,
        }
    }, { timestamps: true }
)

const OrderModel = mongoose.model('OrderSchema', OrderSchema)
module.exports = {
    OrderModel
}

