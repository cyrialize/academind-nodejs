const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        formsCSS: true, 
        productCSS: true, 
        activeAddProduct: true
    });
};

exports.postAddProduct = (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {

    // Previous way of doing it, sending an html file as opposed to a template
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    // 
    // res.render() uses the templating engine defined by app.set('view_engine', '');
    // The second argument of the render function is a JS object with key->value pairs to pass data into the view
    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop', 
        path: '/', 
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
};