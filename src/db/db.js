const mongoose = require("mongoose");
const envConstant = require("../constant/env.constant");

function connectDB() {
  mongoose
    .connect(
      envConstant.mongoDB
    )
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err)=>{
        console.log("MongoDB connection error:", err);
        
    })
}

module.exports = connectDB;
