const { Router } = require('express');
const router = Router();
const getPropertyIdHandler = require('../handlers/getPropertyIdHandler');
const { putUsersHandler } = require('../handlers/putUsersHandler');

const { realStateHandler }= require('../handlers/getAllHandler');
const { postRealStateHandler }= require('../handlers/postRealStateHandler');
const { getUsersHandler } = require('../handlers/getUsersHandler')
const postUserHandler = require('../handlers/postUserHandler');



router.get('/realState', realStateHandler);
router.get('/realState/:id', getPropertyIdHandler);
router.post('/realState', postRealStateHandler);
router.post('/users', postUserHandler);
router.get('/users', getUsersHandler);
router.put('/users/:id', putUsersHandler);

module.exports = router;




