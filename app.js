//WEB SERVER FOR ELECTRICITY USAGE PLANNING: WEB PAGES AND API

// lIBRARIES AND MODULES

// Use Express as web engine
const express = require('express');
// Use Express Handlebars as template engine
const {engine} = require('express-handlebars');

// Get external data with node-fetch for version 2.x
// This version should be installed as follows :npm install node-fetch@2
// const fetch = require('node-fetch')

// Get external data with node-fetch for verion 3.x
// import fetch from 'node-fetch';

// EXPRESS APPLICATION SETTINGS

// Home made module to get current price
const cprice = require('./getHomePageData')

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
        'price': 0,
        'wind': 0,
        'temperature': 0
    };

    cprice.getCurrentPrice().then((resultset) => {
        console.log(resultset.rows[0])
        homePageData.price = resultset.rows[0]['price']
        // Render index.handlebars and send dynamic data to the page
        res.render('index', homePageData)
    })

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
    
    // Data will be presented in a bar chart. Data will be sent as JSON array to get it work on handlebars page
    let tableHours = [13, 14, 15, 16]
    let jsonTableHours = JSON.stringify(tableHours)
    let tablePrices = [31.44, 32.1, 30.5, 29.99]
    let jsonTablePrices = JSON.stringify(tablePrices)
    let chartPageData = { 'chartHours': jsonTableHours, 'chartPrices': jsonTablePrices, 'forTable': hourlyPageData};


    res.render('hourly', chartPageData)
});

app.get('/plotly', (req, res) => {
    let tieto = ''

    res.render('plotly', tieto)
});


// START THE LISTENER
app.listen(PORT);
console.log('Server started and it will listen PCP port', PORT);