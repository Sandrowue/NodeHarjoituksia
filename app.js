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

// Route to home page
app.get('/', (req, res) => {
    // Handlebars needs a key to show data on page, json is a good way to send it
    let homePageData = {
        'price': 31.25,
        'wind': 2,
        'temperature': 18
    };
    // Render index.handlebars and send dynamic data to the page
    res.render('index', homePageData)
});
// Route to hourly data page
app.get('/hourly', (req, res) => {
    // Data will be presented in a table. To loop all rows we need a key for table and for column
    let hourlyPageData = {'tableData' : [
        {'hour': 13,
        'price': 31.44},
        {'hour': 14,
        'price': 32.10},
        {'hour': 15,
        'price': 30.50},
        {'hour': 16,
        'price': 29.99}
    ] };
    res.render('hourly', hourlyPageData)
});

// START THE LISTENER
app.listen(PORT);
console.log('Server started and it will listen PCP port', PORT);