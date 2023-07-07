const { Order } = require("../db.js");

getOrdersController = async(req) => {
    try {
      let orders;
      if (req.query.payment_id) {
        orders = await Order.findOne({ where: { payment_id: req.query.payment_id } });
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