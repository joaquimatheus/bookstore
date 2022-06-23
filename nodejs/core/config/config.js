require('../../../dotenv');

const { 
    PSQL_DBNAME, 
    PSQL_DBHOST, 
    PSQL_USER, 
    PSQL_PASSWORD } = process.env

module.exports = {
    development: {
        username: PSQL_USER,
        password: PSQL_PASSWORD,
        database: PSQL_DBNAME,
        host: PSQL_DBHOST,
        port: 5432,
        dialect: 'postgres',
    }
}

