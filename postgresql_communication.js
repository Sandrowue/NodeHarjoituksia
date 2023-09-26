const Pool = require('pg-pool');


const pool = new Pool({
    host: '192.168.196.10',
    port: 5432,
    database: 'power_consumption_app',
    user: 'postgres',
    password: 'helenium'
});

let sqlClause = 'Select * from public.hourly_price'

// Modern way using a function wiht async-await
/*const price = async() => { const result = await pool.query(sqlClause);
    return result.rows;}

price().then((result) => {console.log(result)}).catch((e) => {console.log(e)})*/

// Define the query returning an error message or resultset
const priceEx2 = pool.query(sqlClause, (error, results) => {
    if (error) {
        throw error;
    }
    console.log(results);
})
