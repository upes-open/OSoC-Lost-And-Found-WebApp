const express = require("express");
const connectToMongo = require("./db");
const cors = require("cors");

const app = express();
const port = 3002;

connectToMongo();

app.use(cors())
app.use(express.json()) 

app.use('/feedback', require('./routes/feedback'))  
app.get("/", (req, res) => {
  res.status(200).send("<h1>OSOC Lost And Found WebApp</h1>")
});
app.listen(port, () => {
    console.log(`myNoteBook backend listening on port ${port}`)
  })