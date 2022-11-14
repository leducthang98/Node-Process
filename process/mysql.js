const mysql = require('mysql2');
const config = require('../config')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: config.mysql.host,
    port: config.mysql.port,
    user: config.mysql.username,
    password: config.mysql.password,
    database: config.mysql.db,
    ssl: {
        rejectUnauthorized: false
    }
});

const query = (sql) => new Promise((res, rej) => {
    pool.query(sql, params, (error, results) => {
        if (error) {
            return reject(error);
        }
        return resolve(results);
    });
})

module.exports = { query }