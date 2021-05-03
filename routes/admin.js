const path = require('path');

const express = require('express');
const { getAddProduct } = require('../controllers/shop');

const adminController = require('../controllers/admin');
const { allowedNodeEnvironmentFlags } = require('process');

const router = express.Router();

// /admin/add-product => GET
// Don't pass in function as a function call, e.g. getAddProduct() - we want Express 
// to link to this function and call it on its own when it runs into this route
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

module.exports = router;