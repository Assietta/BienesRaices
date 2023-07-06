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
const { mailHandler } = require('../handlers/postMailHandler');
const {createOrderHandler}= require('../handlers/postCreateOrderHandler');
const { deleteRealStateHandler } = require('../handlers/deleteRealStateHandler');
const { webhookHandler } = require('../handlers/postCreateOrderHandler');
const { approved } = require('../handlers/getCreateOrderHandler');
const {getOrdersHandler}= require('../handlers/getOrdersHandler');

router.get('/realState', realStateHandler);
router.get('/realState/:id', getPropertyIdHandler);
router.get('/users', getUsersHandler);
router.get('/success', (req, res)=> res.send(req.query.payment_id));
router.get('/pending', (req, res)=> res.send("pend") );
router.get('/failure', (req, res)=> res.send("fail"));
router.get('/approved', approved);
router.get('/orders', getOrdersHandler); 

router.post('/realState', postRealStateHandler);
router.post('/users', postUserHandler);
router.post('/contact', postContactHandler);
router.post('/appraisals', postAppraisalsHandler);
router.post('/sendMail', mailHandler);
router.post('/createOrder/:id', createOrderHandler);
router.post('/webhook', webhookHandler);

router.delete('/users/:id', deleteUserHandler);
router.delete('/realState/:id', deleteRealStateHandler)
router.put('/users/:id', putUsersHandler);
router.put('/realState/:id', putRealStateHandler);

module.exports = router;




