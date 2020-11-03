const express = require('express')
const productsController = require('../controllers/product');
const router = express.Router();
router.get('/',productsController.allProducts);
module.exports = router;