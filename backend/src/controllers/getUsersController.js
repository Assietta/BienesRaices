const { User } = require("../db.js");

 getUsersController = async() => {
try{let users = await User.findAll();
   return users;
}catch(error){
throw new Error('Hubo un problema para encontrar los usuarios')
}
};

module.exports = {
    getUsersController
};