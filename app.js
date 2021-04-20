const path = require('path');

const express = require('express');
const expressHbs = require('express-handlebars');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// app.set() allows you to set a global configuration value in express
// app.get() gets the value that you saved
// app.set('view engine', '') sets the view engine we'll be using with express
// We can also tell express where our views folder is with app.set('views', ''); but in this case 
// our views folder is already in the default spot that express looks in
// app.engine('hbs', expressHbs()) - registers a view engine within express
// name chosen becomes extension name (e.g. 404.hbs)
// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})); 

app.set('view engine', 'ejs');
app.set('views', 'views');

// This was previously the following:
// const bodyParser = require('body-parser');
// bodyParser.urlencoded({extended: false});
// This is built into express now, so we just use what is below
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Works as a catch all since all other routes are inserted above
app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);