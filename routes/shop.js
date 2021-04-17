const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {

    // Previous way of doing it, sending an html file as opposed to a template
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    // 
    // res.render() uses the templating engine defined by app.set('view_engine', '');
    // The second argument of the render function is a JS object with key->value pairs to pass data into the view
    const products = adminData.products;
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
});

module.exports = router;