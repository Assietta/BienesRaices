const { log } = require('console');
const { putUsersController } = require('../controllers/putUsersController.js');

const putUsersHandler = async (req, res) => {
  const id = req.params.id;
  const { username, email, password, rol, favorites } = req.body;
  try {
    await putUsersController(id, username, email, password, rol, favorites);
    res.send('Registro modificado correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  putUsersHandler
};