const { Order } = require('../db')

const getOrderByIdController = async(userId) => {
    const client_idDB = userId
    const order = await Order.findOne({ where: { client_idDB } })
    console.log(order);
    return order;
};

module.exports = { 
    getOrderByIdController 
};