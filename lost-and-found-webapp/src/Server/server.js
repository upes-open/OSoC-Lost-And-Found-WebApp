
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const app = express();
// Set up middleware for parsing JSON and handling file uploads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const CollectedItem = require('./models/collecteditem');


// Set up MongoDB connection
const MONGODB_URI = 'mongodb+srv://admin:helloadmin@lost-and-found.mczrz51.mongodb.net/LostandFound?retryWrites=true&w=majority'; // Replace with your MongoDB connection string
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Set up multer storage configuration for found items
const foundItemStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './foundItemImages');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extname = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extname);
  },
});

// Set up multer storage configuration for lost items
const lostItemStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './lostItemImages');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extname = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extname);
  },
});

// Set up multer upload configuration for found items
const foundItemUpload = multer({ storage: foundItemStorage });

// Set up multer upload configuration for lost items
const lostItemUpload = multer({ storage: lostItemStorage });

// Define a schema for the found item form data
const foundItemCollectionName = 'foundItem'; // Replace with your specific collection name
const foundItemSchema = new mongoose.Schema(
  {
    description: String,
    date: String,
    category: String,
    subcategory: String,
    itemName: String,
    place: String,
    ownerName: String,
    details: String,
    isIdentifiable: Boolean,
    itemImage: String,
  },
  { collection: foundItemCollectionName }
);

// Create a model for found items
const FoundItem = mongoose.model('FoundItem', foundItemSchema, foundItemCollectionName);

// Define a schema for the lost item form data
const lostItemCollectionName = 'lostItem'; // Replace with your specific collection name
const lostItemSchema = new mongoose.Schema(
  {
    description: String,
    date: String,
    phone: String,
    name: String,
    sapId: String,
    category: String,
    subcategory: String,
    itemName: String,
    itemImage: String,
    place: String,
  },
  { collection: lostItemCollectionName }
);

// Create a model for lost items
const LostItem = mongoose.model('LostItem', lostItemSchema, lostItemCollectionName);

// Define the route to handle found item form submission with image upload
app.post('/api/submitFoundItem', foundItemUpload.single('itemImage'), async (req, res) => {
  try {
    const {
      description,
      date,
      category,
      subcategory,
      itemName,
      place,
      ownerName,
      details,
      isIdentifiable,
    } = req.body;
    const itemImage = req.file.filename;

    const foundItem = new FoundItem({
      description,
      date,
      category,
      subcategory,
      itemName,
      place,
      ownerName,
      details,
      isIdentifiable,
      itemImage,
    });
    await foundItem.save();

    res.sendStatus(200);
  } catch (error) {
    console.error('Error submitting found item form:', error);
    res.sendStatus(500);
  }
});

// Define the route to handle lost item form submission with image upload
app.post('/api/submitLostItem', lostItemUpload.single('itemImage'), async (req, res) => {
  try {
    const { description, date, phone, name, sapId, category, subcategory, itemName, place } = req.body;
    let itemImage = null;

    if (req.file) {
      itemImage = req.file.filename;
    }

    const lostItem = new LostItem({
      description,
      date,
      phone,
      name,
      sapId,
      category,
      subcategory,
      itemName,
      itemImage,
      place,
    });
    await lostItem.save();

    res.sendStatus(200);
  } catch (error) {
    console.error('Error submitting lost item form:', error);
    res.sendStatus(500);
  }
});

// fetch all found items
app.post('/getAllItems', async (req, res) => {

  try {
      let items = await FoundItem.find();
      res.json(items);
  }
  catch (error) {
      console.log("error", error);
  }

})

// fetch lost items
app.post('/getLostItems', async (req, res) => {

  try {
      let items = await LostItem.find();
      res.json(items);
  }
  catch (error) {
      console.log("error", error);
  }

})

//claiming id
app.post('/claimItem/:id', async (req, res) => {
  try {
    const itemId = req.params.id;
    const item = await FoundItem.findById(itemId);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    const {
      details,
      name,
      email,
      sapId,
      branch,
      year,
      contactNumber,
    } = req.body;

    // Create a new document in the CollectedItem collection with the item details and additional fields
    const collectedItem = new CollectedItem({
      description: item.description,
      date: item.date,
      category: item.category,
      subcategory: item.subcategory,
      itemName: item.itemName,
      place: item.place,
      ownerName: item.ownerName,
      details: item.details,
      isIdentifiable: item.isIdentifiable,
      itemImage: item.itemImage,
      details: req.body.details,
      name: req.body.name,
      email: req.body.email,
      sapId: req.body.sapId,
      branch: req.body.branch,
      year: req.body.year,
      contactNumber: req.body.contactNumber,
    });

    // Save the collected item
    await collectedItem.save();

    // Delete the item from the FoundItem collection
    await FoundItem.findByIdAndDelete(itemId);

    res.sendStatus(200);
  } catch (error) {
    console.error('Error claiming item:', error);
    res.sendStatus(500);
  }
});

// feedback
app.use('/feedback', require('./routes/feedback'))  

// for fetching the images
app.use('/foundItemImages', express.static(path.join(__dirname, 'foundItemImages')));
app.use('/lostItemImages', express.static(path.join(__dirname, 'lostItemImages')));

app.get("/", (req, res) => {
  res.status(200).send("<h1>OSOC Lost And Found WebApp</h1>")
});

// Start the server
const port = process.env.PORT || 5000; // Choose the desired port for your server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});