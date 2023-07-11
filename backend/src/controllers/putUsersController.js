const { log } = require('console');
const { User } = require('../db');

const putUsersController = async (id, username, email, password, rol, favorites) => {
    // Busca el registro en la base de datos por su ID
    const user = await User.findOne({ where: { id } })

    if (!user) {
      throw new Error('No se encontró el usuario');
    }

    // Actualiza los campos que deseas modificar
<<<<<<< HEAD
      user.username = username;
      user.email = email;
      user.password = password;
      user.rol = rol;
    user.favorites = favorites;
=======
    if(username) {
      user.username = username;
    }
    if(email){
      user.email = email;
    }
    if(favorites){
      user.favorites = favorites;
    }
    if(password){
      user.password = password;
    }
    if(rol){
      user.rol = rol;
    }
>>>>>>> 93bce983ff3210422e31bfa45b5da60ccf524fd0

    // Guarda los cambios en la base de datos
    await user.save();

    return user;
};

module.exports = {
  putUsersController
};