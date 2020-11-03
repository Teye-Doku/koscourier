const express = require('express');
const ordersController = require('../controllers/order');
const router = express.Router();

router.get('/',ordersController.allOrders);

module.exports = router;