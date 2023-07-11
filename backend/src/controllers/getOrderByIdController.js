const { Order } = require('../db')

const getOrderByIdController = async(userId) => {
    const client_idDB = userId
    const order = await Order.findOne({ where: { client_idDB } })

    return order;
};

module.exports = {
    getOrderByIdController
};