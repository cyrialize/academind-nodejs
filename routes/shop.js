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
    res.render('shop.pug');
});

module.exports = router;