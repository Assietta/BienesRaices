const { Order } = require("../db.js");

 getOrdersController = async() => {
try{let orders = await Order.findAll();
   return orders;
}catch(error){
throw new Error('Hubo un problema para encontrar las ordenes')
}
};

module.exports = {
    getOrdersController
};