require('dotenv').config()

const envConstant = {
    port: process.env.port,
    mongoDB: process.env.mongoDB,
    token: process.env.token
}

module.exports = envConstant;