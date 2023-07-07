const { putUsersController } = require('../controllers/putUsersController.js');

const putUsersHandler = async (req, res) => {
  const id = req.params.id;
  const { username, email, password, rol, favorites } = req.body;

  try {
    const updatedUser = await putUsersController(id, username, email, password, rol, favorites);
    res.send('Registro modificado correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al modificar el registro');
  }
};

module.exports = {
  putUsersHandler
};