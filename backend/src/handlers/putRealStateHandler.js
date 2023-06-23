const { putRealStateController } = require('../controllers/putRealStateController.js');

const putRealStateHandler=async(req, res) => {
    const id = req.params.id;
    // Lógica para modificar el registro con el ID proporcionado
    res.send('Registro modificado correctamente');
  }

  module.exports={

    putRealStateHandler
  }