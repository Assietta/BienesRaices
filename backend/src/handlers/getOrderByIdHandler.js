const { getOrderByIdController } = require('../controllers/getOrderByIdController')

const getOrderByIdHandler = async (req, res) => {
    try{
    const { userId } = req.params;
     const  order = await getOrderByIdController(userId);
    return res.status(200).json( order )
    }catch(error){
       return res.status(400).json({ error: error.message })
    }
  };
  
  module.exports = {
    getOrderByIdHandler
  };