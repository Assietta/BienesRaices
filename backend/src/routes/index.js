const { Router } = require('express');
const router = Router();
const getPropertyIdHandler = require('../handlers/getPropertyIdHandler');

const { realStateHandler }= require('../handlers/getAll');
const { postRealStateHandler }= require('../handlers/postRealState');
const { getUsersHandler } = require('../handlers/getUsers')
const postUserHandler = require('../handlers/postUserHandler');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/realState', realStateHandler);
router.get('/realState/:id', getPropertyIdHandler)
router.post('/realStatePost', postRealStateHandler);
router.post('/users', postUserHandler);
router.get('/users', getUsersHandler)

module.exports = router;




