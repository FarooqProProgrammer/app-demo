const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema(
    {
        ProductTitle: {
            type: String,
            required: true,
        },
        RegularPrice: {
            type: String,
            required: true,
            unique: true,
        },
        SalePrice: {
            type: String,
            required: true,
            unique: true,
        },
        TotalPrice: {
            type: String,
            required: true,
            unique: true,
        },
        Stock:{
            required:true,
            type:String,
        },
        Sku:{
            required:true,
            type:String,
        },
        Category:{
            required:true,
            type:String,
        },
        images : {
            required:true,
            type:Array
        }
        
        
    }, { timestamps: true }
)

const ProductModel = mongoose.model('ProductSchema', ProductSchema)
module.exports = {
    ProductModel
}

