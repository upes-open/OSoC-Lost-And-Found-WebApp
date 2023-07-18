const database =  require('./Database.js');

// import { getLostItems } from './Database.js';

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
app.get("/lostItem", (req, res) => {
  // const lostItems =  database.getLostItems();
  // console.log(database.getLostItems());
  const lostItems = new Promise((resolve, reject) => {
    database.getLostItems().then((result) => {
      if (result) {
        resolve(result);
      } else {
        reject(new Error("No lost items found"));
      }
    });
  });
  res.send(lostItems);
});
app.listen(port, () => {
    console.log(`myNoteBook backend listening on port ${port}`)
  })