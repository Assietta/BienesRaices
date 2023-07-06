const { User } = require("../db")
const bcrypt = require('bcryptjs');

const postUserController = async(email, password, username, rol, image, provider) => {
    const saltRounds = 10;
    if (password) password = await bcrypt.hash(password, saltRounds);
    if(!provider) provider = 'credentials'

    // Buscar si existe un usuario con la misma dirección de correo electrónico y proveedor
    let user = await User.findOne({ where: { email, provider } });

    if (!user) {
      // No se encontró un usuario con la misma dirección de correo electrónico y proveedor, crear uno nuevo
      user = await User.create({
        email,
        password,
        username,
        rol,
        image,
        provider
      });
    }

    return user;
  };


module.exports = postUserController