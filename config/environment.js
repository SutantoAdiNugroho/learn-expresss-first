require("dotenv").config();

module.exports = {
    PORT: process.env.PORT,
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_NAME : process.env.DATABASE_NAME,
    DATABASE_NAME_USERS : process.env.DATABASE_NAME_USERS,
    DATABASE_HOST_LIVE : process.env.DATABASE_HOST_LIVE
};