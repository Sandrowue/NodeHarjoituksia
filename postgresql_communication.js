const pg = require('pg');
const Client = require('pg').Client;
const Pool = require('pg').Pool;

const pool = new Pool({
    host: '192.168.196.10',
    port: 5432,
    database: 'power_consumption_app',
    user: 'postgres',
    password: 'helenium'
});
pool.connect();

const result = pool.query('Select * from public.hourly_price');
console.log(result);

pool.end();