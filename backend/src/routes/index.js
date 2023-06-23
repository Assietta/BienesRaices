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
router.get('/users', getUsersHandler);
router.post('/realState', postRealStateHandler);
router.post('/users', postUserHandler);
router.put('/users/:id', putUsersHandler);
router.put('/realState/:id', putRealStateHandler);

module.exports = router;




