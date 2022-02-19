const pg = require('pg');

// database connection options
const options = {
    host: 'localhost',
    database: 'react-gallery',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30_000,
}

// db connection object
const pool = new pg.Pool(options);

// send success status when db is connected
pool.on('connect', () => {
    console.log(`Connected to database ${options.database} at ${Date.now()}`);
})

// send error status when there is a db error
pool.on('error', (err) => {
    console.error(`Error with database ${options.database} at ${Date.now()}: ${err}`);
})

// export pool
module.exports = pool;