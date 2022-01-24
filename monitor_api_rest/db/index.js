const {Pool} = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'admin',
    database: 'bikeshop'
})

module.exports = {
    query: (text, params, callback) => pool.query(text, params, callback)
}