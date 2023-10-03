const Pool = require('pg').Pool;
const cron = require('node-cron');
const priceService = require('./priceService');

const pool = new Pool({
    user: 'postgres',
    password: 'helenium',
    host: '192.168.196.10',
    database: 'power_consumption_app',
    port: '5432'
});

let lastFetchedDate = '1.1.2023';
cron.schedule('*/5 15 * * *', () => {
    try {
        let timestamp = new Date();
        let dateStr = timestamp.toLocaleDateString();

        if (lastFetchedDate != dateStr) {
            console.log('Started fetching price data ');
            priceService.fetchLatestPriceData().then((json) => {
                json.prices.forEach(async (element) => {
                    let values = [element.startDate, element.price];
                    const sqlClause = 'INSERT INTO public.hourly_price VALUES ($1, $2) ON CONFLICT DO NOTHING RETURNING *';
                    const runQuery = async () => {
                        let resultset = await pool.query(sqlClause, values);
                        return resultset;
                    }
                    runQuery().then((resultset) => console.log(resultset.rows[0]))
                });
            });
            lastFetchedDate = dateStr;
            console.log('Fetched at', lastFetchedDate);
        } else {
            console.log('Data has been successfully retrieved earlier today');
        }
    } catch (error) {
        console.log('An error() occurred, trying again in 5 minutes until 4 PM');
    }
});