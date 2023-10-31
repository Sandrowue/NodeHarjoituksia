// A Module to retrieve home page data form Postgresql server

const Pool = require('pg').Pool;
const settings = require('./database_and_timer_settings.json');

const database = settings.database; 

const pool = new Pool(
    database
);

const getCurrentPrice = async () => {
    let resultset = await pool.query('SELECT price FROM public.current_prices');
    return resultset;
}

module.exports = {
    getCurrentPrice
}

