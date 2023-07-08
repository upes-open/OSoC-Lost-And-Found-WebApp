const mongoose = require("mongoose")
require('dotenv').config();

const mongoURI = process.env.MONGO_URI; 

const connectToMongo = () => {
    try{
        mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true });
    }
    catch(error){
        console.log(error);
    }
    console.log("database connected")
}

module.exports = connectToMongo;