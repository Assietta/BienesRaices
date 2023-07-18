const { log } = require('console');
const { User } = require('../db');
const bcrypt = require('bcryptjs');

const putUsersController = async (id, username, email, password, rol, favorites, disabled) => {
    // Busca el registro en la base de datos por su ID
    const user = await User.findOne({ where: { id } })
    const saltRounds = 10;
    if (!user) {
      throw new Error('No se encontró el usuario');
    }

    // Actualiza los campos que deseas modificar
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
      user.password = await bcrypt.hash(password, saltRounds);
    }
    if(rol){
      user.rol = rol;
    }
    if(disabled){
      user.disabled = disabled;
    }

    // Guarda los cambios en la base de datos
    await user.save();

    return user;
};

module.exports = {
  putUsersController
};