const { getUsersController } = require('../controllers/getUsersController')

const getUsersHandler = async (req, res) => {
    try{
     let users = await getUsersController();
     res.status(200).json({ users })
    }catch(error){
        res.status(400).json({ error: error.message })
    }
  };
  
  module.exports = {
    getUsersHandler
  };