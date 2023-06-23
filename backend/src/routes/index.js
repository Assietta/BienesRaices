const { Router } = require('express');
const router = Router();
const getPropertyIdHandler = require('../handlers/getPropertyIdHandler');

const { realStateHandler }= require('../handlers/getAllHandler');
const { postRealStateHandler }= require('../handlers/postRealStateHandler');
const { getUsersHandler } = require('../handlers/getUsersHandler');
const postUserHandler = require('../handlers/postUserHandler');
const { putUsersHandler } = require('../handlers/putUsersHandler');
const { putRealStateHandler } = require('../handlers/putRealStateHandler');



router.get('/realState', realStateHandler);
router.get('/realState/:id', getPropertyIdHandler);
router.post('/realStatePost', postRealStateHandler);
router.post('/users', postUserHandler);
router.get('/users', getUsersHandler);
router.put('/usersPut/:id', putUsersHandler);
router.put('/realStatePut/:id', putRealStateHandler);

module.exports = router;




