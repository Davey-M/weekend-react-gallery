const pg = require('pg');

const options = {
    host: 'localhost',
    database: 'react-gallery',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30_000,
}

const pool = new pg.Pool(options);

pool.on('connect', () => {
    console.log(`Connected to database ${options.database} at ${Date.now()}`);
})

pool.on('error', (err) => {
    console.error(`Error with database ${options.database} at ${Date.now()}: ${err}`);
})

module.exports = pool;