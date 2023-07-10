const { getUserByIdController } = require('../controllers/getUserByIdController');

const getUserByIdHandler = async (req, res) => {
    try{
    const { id } = req.params;
     const  user = await getUserByIdController(id);
    return res.status(200).json( user )
    }catch(error){
       return res.status(400).json({ error: error.message })
    }
  };
  
  module.exports = {
    getUserByIdHandler
  };