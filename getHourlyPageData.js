const Pool = require('pg').Pool; 

const pool = new Pool({
    user: 'postgres',
    password: 'helenium',
    host: '192.168.196.10',
    database: 'power_consumption_app',
    port: '5432'
});

const getHourlyPrice = async () => {
    let resultset = await pool.query('SELECT * FROM public.hourly_page');
    return resultset;
}

const getDay = async () => {
    let resultset = await pool.query('SELECT day FROM public.hourly_page');
    return resultset;
}

const getHour = async () => {
    let resultset = await pool.query('SELECT hour FROM public.hourly_page');
    return resultset;
}

const getPrice = async() => {
    let resultset = await pool.query('SELECT price FROM public.hourly_page');
    return resultset
}

module.exports = {
    getHourlyPrice,
    getDay,
    getHour,
    getPrice
}

