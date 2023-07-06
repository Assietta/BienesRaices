const { Order } = require("../db.js");

getOrdersController = async(req) => {
    try {
      let orders;
      if (req.query.id) {
        orders = await Order.findOne({ where: { id: req.query.id } });
      } else {
        orders = await Order.findAll();
      }
      return orders;
    } catch(error) {
      throw new Error('Hubo un problema para encontrar las ordenes')
    }
  };
  

module.exports = {
    getOrdersController
};