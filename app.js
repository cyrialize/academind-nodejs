const path = require('path');

const express = require('express');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// app.set() allows you to set a global configuration value in express
// app.get() gets the value that you saved
// This sets the view engine we'll be using with express
// We can also tell express where our views folder is with app.set('views', ''); but in this case 
// our views folder is already in the default spot that express looks in
app.set('view engine', 'pug');
app.set('views', 'views');

// This was previously the following:
// const bodyParser = require('body-parser');
// bodyParser.urlencoded({extended: false});
// This is built into express now, so we just use what is below
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

// Works as a catch all since all other routes are inserted above
app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);