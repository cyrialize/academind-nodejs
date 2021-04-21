const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        formsCSS: true, 
        productCSS: true, 
        activeAddProduct: true
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {

    const products = Product.fetchAll((products) => {
        // Previous way of doing it, sending an html file as opposed to a template
        // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
        // 
        // res.render() uses the templating engine defined by app.set('view_engine', '');
        // The second argument of the render function is a JS object with key->value pairs to pass data into the view
        res.render('shop/product-list', {
            prods: products, 
            pageTitle: 'Shop', 
            path: '/', 
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
};