const { User } = require('../db');

const putUsersController = async (id, username, email, password, rol, favorites) => {
  try {
    // Busca el registro en la base de datos por su ID
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error('No se encontró el usuario');
    }

    // Actualiza los campos que deseas modificar
    user.username = username;
    user.email = email;
    user.password = password;
    user.rol = rol;
    user.favorites = favorites;

    // Guarda los cambios en la base de datos
    await user.save();

    return user;
  } catch (error) {
    throw new Error('Error al modificar el registro');
  }
};

module.exports = {
  putUsersController
};