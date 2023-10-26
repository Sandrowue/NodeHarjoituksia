// A Module to retrieve home page data form Postgresql server

const Pool = require('pg').Pool; 

const pool = new Pool({
    user: 'postgres',
    password: 'helenium',
    host: '192.168.196.10',
    database: 'power_consumption_app',
    port: '5432'
});

const getCurrentPrice = async () => {
    let resultset = await pool.query('SELECT price FROM public.current_prices');
    return resultset;
}

module.exports = {
    getCurrentPrice
}

