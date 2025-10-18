// start server
require('dotenv').config()
// console.log(process.env.port) // remove this after you've confirmed it is working

const app = require('./src/app');
const connectDB = require('./src/db/db');

connectDB();

app.listen(process.env.port,()=>{
    console.log(`Server is running on port ${process.env.port}`);
    
})