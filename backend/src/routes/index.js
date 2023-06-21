const { Router } = require('express');
const getPropertyIdHandler = require('../handlers/getPropertyIdHandler');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/realState/:id', getPropertyIdHandler)


module.exports = router;
