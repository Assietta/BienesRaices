const { getOrdersController } = require('../controllers/getOrdersController')

const getOrdersHandler = async (req, res) => {
    try{
     let orders = await getOrdersController(req);
     res.status(200).json({ orders })
    }catch(error){
        res.status(400).json({ error: error.message })
    }
  };
  
  module.exports = {
    getOrdersHandler
  };