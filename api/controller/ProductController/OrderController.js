const {OrderModel} = require("../../models/Ecommerce/OrderSchema")
const logger = require('../../config/logger')
const Log = require('../../models/logModel');

const AddOrder = async (req, res) => {
    console.log(req.body)

    const { CustomerName, DateOrder, PurchaseProduct , TotalPrice ,Status } = req.body;


        const orderSaved = new  OrderModel({CustomerName,DateOrder,PurchaseProduct,TotalPrice,Status})
       await orderSaved.save();
       console.log("HELLO")

        res.send({'message':'Order Saved Successfully'})

        const logEntry = new Log({
            timestamp: new Date(),
            level: 'info',
            message: `${req.method} ${req.originalUrl} Order Saved ${CustomerName}`,
        });
    
       await logEntry.save()
    
    
        logger.info(CustomerName + ' Add Order  Access Routes '+ req.method + req.originalUrl);


    

}

const AllOrder = async (req,res) => {
    const orders = await OrderModel.find();
    res.send(orders)
}


module.exports = { AddOrder,AllOrder }