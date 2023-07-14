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

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './foundItemImages');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extname = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extname);
  },
});

// Set up multer upload configuration
const upload = multer({ storage });

// Define a schema for the form data
const collectionName = 'foundItem'; // Replace with your specific collection name
const formDataSchema = new mongoose.Schema(
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
    itemImage: String, // Update the data type to store the image filename as a string
  },
  { collection: collectionName }
);

// Create a model based on the schema
const FormData = mongoose.model('FormData', formDataSchema, collectionName);

// Define the route to handle form submission with image upload
app.post('/api/submitForm', upload.single('itemImage'), async (req, res) => {
  try {
    const { description, date, category, subcategory, itemName, place, ownerName, details, isIdentifiable } = req.body;
    const itemImage = req.file.filename; // Use the filename property of the uploaded file

    // Save the form data to MongoDB collection
    const formData = new FormData({
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
    await formData.save();

    res.sendStatus(200);
  } catch (error) {
    console.error('Error submitting form:', error);
    res.sendStatus(500);
  }
});

// Start the server
const port = process.env.PORT || 5000; // Choose the desired port for your server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
