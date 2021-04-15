const path = require('path');

const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// This was previously the following:
// const bodyParser = require('body-parser');
// bodyParser.urlencoded({extended: false});
// This is built into express now, so we just use what is below
app.use(express.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Works as a catch all since all other routes are inserted above
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);