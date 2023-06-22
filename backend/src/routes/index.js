const { Router } = require('express');
const router = Router();
const getPropertyIdHandler = require('../handlers/getPropertyIdHandler');
const { realStateHandler }= require('../handlers/getAll');
const { postRealStateHandler }= require('../handlers/postRealState');
const { getUsersHandler } = require('../handlers/getUsers')


router.get('/realState', realStateHandler);
router.get('/realState/:id', getPropertyIdHandler);
router.get('/users', getUsersHandler)
router.post('/realStatePost', postRealStateHandler);
router.post('/users');

module.exports = router;




