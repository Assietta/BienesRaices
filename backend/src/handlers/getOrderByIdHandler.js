const { getOrderByIdController } = require('../controllers/getOrderByIdController')

const getOrderByIdHandler = async (req, res) => {
    try{
    const userId = req.params;
     let order = await getOrderByIdController(userId);
     res.status(200).json({ order })
    }catch(error){
        res.status(400).json({ error: error.message })
    }
  };
  
  module.exports = {
    getOrderByIdHandler
  };