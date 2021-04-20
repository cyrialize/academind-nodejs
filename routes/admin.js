const path = require('path');

const express = require('express');
const { getAddProduct } = require('../controllers/products');

const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
// Don't pass in function as a function call, e.g. getAddProduct() - we want Express 
// to link to this function and call it on its own when it runs into this route
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;