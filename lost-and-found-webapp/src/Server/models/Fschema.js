const mongoose = require("mongoose");

const F_schema = mongoose.Schema({
    email: {
        type: String,
        requires: true
    },

    feedback: {
        type: String,
        required: true
    },
    date : {
        type : Date,
        default : Date.now
    }
    
})


const Fschema = mongoose.model("feedback", F_schema);
module.exports = Fschema;

