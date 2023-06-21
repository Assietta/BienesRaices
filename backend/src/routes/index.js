const { Router } = require('express');
const getPropertyIdHandler = require('../handlers/getPropertyIdHandler');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getRealState }= require('../controllers/contrealState.js');
const { realStateHandler }= require('../handlers/getAll');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/realState', realStateHandler);
router.get('/realState/:id', getPropertyIdHandler)
router.post('/realStatePost', postRealState);
router.post('/user');

module.exports = router;


//- LO QUE REALMENTE NECESITAMOS-
//PG MODELS, USUARIO, INMUEBLE ->NICO ALONSO

//GETSTATE, GETSTATE/:ID, jere lu fran

//POSTSTATE, POSTUSER

//GETUSERS${NAME}

