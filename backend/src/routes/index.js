const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getRealState }= require('../controllers/contrealState.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/realState', getRealState);
router.get('/realState/:id');
router.post('/realState/');
router.post('/user');

module.exports = router;



//MODELS, USUARIO, INMUEBLE .NICO ALONSO
//GETSTATE, GETSTATE/:ID, 
//POSTSTATE, POSTUSER
//GETUSERS${NAME}
