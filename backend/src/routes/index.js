const { Router } = require('express');
const router = Router();
const { getPropertyIdHandler } = require('../handlers/getPropertyIdHandler');
const { putUsersHandler } = require('../handlers/putUsersHandler');
const { realStateHandler }= require('../handlers/getAllHandler');
const { postRealStateHandler }= require('../handlers/postRealStateHandler');
const { getUsersHandler } = require('../handlers/getUsersHandler')
const { postUserHandler } = require('../handlers/postUserHandler');
const { deleteUserHandler } = require('../handlers/deleteUserHandler')
const { putRealStateHandler } = require('../handlers/putRealStateHandler');
const {postContactHandler} = require('../handlers/postContactHandler');
const {postAppraisalsHandler} = require('../handlers/postAppraisalsHandler');
const {createOrderHandler}= require('../handlers/postCreateOrderHandler');
const { deleteRealStateHandler } = require('../handlers/deleteRealStateHandler')
const { postFilterHandler } = require('../handlers/postFilterHandler');
const {webhookHandler}= require('../handlers/postCreateOrderHandler');
const {getOrdersHandler}= require('../handlers/getOrdersHandler');
const { getAppraisalsHandler } = require('../handlers/getAppraisalsHandler')

router.get('/realState', realStateHandler);
router.get('/realState/:id', getPropertyIdHandler);
router.get('/users', getUsersHandler);
router.get('/success', (req, res)=> res.send(req.query.payment_id));
router.get('/pending', (req, res)=> res.send("pend") );
router.get('/failure', (req, res)=> res.send("fail"));
router.get('/orders', getOrdersHandler); 
router.get('/appraisals/:id', getAppraisalsHandler)

router.post('/realState', postRealStateHandler);
router.post('/users', postUserHandler);
router.post('/contact', postContactHandler);
router.post('/appraisals', postAppraisalsHandler);
router.post('/filter', postFilterHandler);
router.post('/webhook', webhookHandler);
router.post('/createOrder/:id', createOrderHandler);

router.delete('/users/:id', deleteUserHandler);
router.delete('/realState/:id', deleteRealStateHandler)
router.put('/users/:id', putUsersHandler);
router.put('/realState/:id', putRealStateHandler);

module.exports = router;



