const Product = require('../models/product');

exports.getProducts = (req, res, next) => {

    const products = Product.fetchAll((products) => {
        // Previous way of doing it, sending an html file as opposed to a template
        // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
        // 
        // res.render() uses the templating engine defined by app.set('view_engine', '');
        // The second argument of the render function is a JS object with key->value pairs to pass data into the view
        res.render('shop/product-list', {
            prods: products, 
            pageTitle: 'All Products', 
            path: '/products', 
        });
    });
};

// productId matches the name given in the dynamic route, :productId
exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    console.log(prodId);
    res.redirect('/');
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products, 
            pageTitle: 'Shop', 
            path: '/', 
        });
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    });
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};