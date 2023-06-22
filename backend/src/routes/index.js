const { Router } = require('express');
const router = Router();
const getPropertyIdHandler = require('../handlers/getPropertyIdHandler');
const { realStateHandler }= require('../handlers/getAll');
const { postRealStateHandler }= require('../handlers/postRealState');


router.get('/realState', realStateHandler);
router.get('/realState/:id', getPropertyIdHandler)//
router.post('/realStatePost', postRealStateHandler);
router.post('/user');

module.exports = router;


//- LO QUE REALMENTE NECESITAMOS-
//PG MODELS, USUARIO, INMUEBLE ->NICO ALONSO

//GETSTATE, GETSTATE/:ID, jere lu fran

//POSTSTATE, POSTUSER

//GETUSERS${NAME}

