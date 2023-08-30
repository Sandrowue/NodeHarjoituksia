//WEB SERVER FOR ELECTRICITY USAGE PLANNING: WEB PAGES AND API

// lIBRARIES AND MODULES

// Use Express as web engine
const express = require('express');
// Use Express Handlebars as template engine
const {engine} = require('express-handlebars');

// EXPRESS APPLICATION SETTINGS

// Create the server
const app = express();
const PORT = process.env.Port || 8080;

// Set folder pahts: public is for assets and views for pages
app.use(express.static('public'));
app.set('views', './views');

// Engine settings
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// URL ROUTES
app.get('/', (req, res) => {
    let homePageData = {
        'price': 31.25,
        'wind': 2,
        'temperature': 18
    };
    res.render('index', homePageData)
});

app.get('/hourly', (req, res) => {
    let hourlyPageData = {
        'hour': 13,
        'price': 31.44
    };
    res.render('hourly', hourlyPageData)
});

// START THE LISTENER
app.listen(PORT);
console.log('Server started and it will listen PCP port', PORT);