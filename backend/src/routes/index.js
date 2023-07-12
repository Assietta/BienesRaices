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
const { postContactHandler } = require('../handlers/postContactHandler');
const { postAppraisalsHandler } = require('../handlers/postAppraisalsHandler');
const { createOrderHandler }= require('../handlers/postCreateOrderHandler');
const { deleteRealStateHandler } = require('../handlers/deleteRealStateHandler')
const { postFilterHandler } = require('../handlers/postFilterHandler');
const { webhookHandler }= require('../handlers/postCreateOrderHandler');
const { getOrdersHandler }= require('../handlers/getOrdersHandler');
const { getExcelOrdersHandler }= require('../handlers/getExcelOrdersHandler');
const { getExcelUsersHandler }= require('../handlers/getExcelUsersHandler');
const { getExcelRealStateHandler }= require('../handlers/getExcelRealStateHandler');
const { getAppraisalsHandler } = require('../handlers/getAppraisalsHandler');
const { getOrderByIdHandler } = require('../handlers/getOrderByIdHandler');
const { getUserByIdHandler } = require('../handlers/getUserByIdHandler');
const { getContactByIdHandler } = require('../handlers/getContactByIdHandler');
const { getAllContactHandler } = require('../handlers/getAllContactHandler')
const { getAllAppraisalsHandler } = require('../handlers/getAllAppraisalsHandler')
const { getAllTagsHandler } = require('../handlers/getAllTagsHandler')

router.get('/realState', realStateHandler);
router.get('/realState/:id', getPropertyIdHandler);
router.get('/users', getUsersHandler);
router.get('/users/:id', getUserByIdHandler);
router.get('/success', (req, res)=> res.send(req.query.payment_id));
router.get('/pending', (req, res)=> res.send("pend") );
router.get('/failure', (req, res)=> res.send("fail"));
router.get('/orders', getOrdersHandler); 
router.get('/download/orders', getExcelOrdersHandler);
router.get('/download/users', getExcelUsersHandler);
router.get('/download/realState', getExcelRealStateHandler);
router.get('/appraisals/:userId', getAppraisalsHandler);
router.get('/orders/:userId', getOrderByIdHandler);
router.get('/contact/:userId', getContactByIdHandler);
router.get('/contact', getAllContactHandler)
router.get('/tags', getAllTagsHandler)

router.get('/appraisals', getAllAppraisalsHandler)

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

