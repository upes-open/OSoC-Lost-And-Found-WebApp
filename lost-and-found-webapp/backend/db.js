const mongoose = require("mongoose")
require('dotenv').config();

const mongoURI = "mongodb+srv://admin:helloadmin@lost-and-found.mczrz51.mongodb.net/LostandFound?retryWrites=true&w=majority"; 

const connectToMongo = () => {
    try{
        mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true });
    }
    catch(error){
        console.log(error.message);
    }
    console.log("database connected")
}

module.exports = connectToMongo;