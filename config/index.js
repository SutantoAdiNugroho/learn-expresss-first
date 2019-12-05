const { PORT, DATABASE_HOST, DATABASE_NAME,DATABASE_PASSWORD, JWT_SECRET_KEY } = require("./environment");
const {connect, get, close} = require("./connection")

module.exports = {
    PORT: PORT,
    DATABASE_HOST, DATABASE_HOST,
    DATABASE_NAME: DATABASE_NAME,
    DATABASE_PASSWORD: DATABASE_PASSWORD,
    connect: connect,
    get: get,
    close: close,
    JWT_SECRET_KEY
};