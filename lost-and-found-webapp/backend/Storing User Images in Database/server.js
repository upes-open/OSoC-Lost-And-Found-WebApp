const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const FoundItem = require('./models/foundItem');
const LostItem = require('./models/lostItem');

mongoose.connect('mongodb+srv://admin:helloadmin@lost-and-found.mczrz51.mongodb.net/LostandFound?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Define multer storage for uploading files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (req.path === '/foundItem') {
      cb(null, 'foundItemUploads');
    } else if (req.path === '/lostItem') {
      cb(null, 'lostItemUploads');
    }
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname);
    cb(null, uniqueSuffix + fileExtension);
  }
});

const upload = multer({ storage });

// Default route - index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Route for the foundItem form
app.get('/foundItem', (req, res) => {
  res.sendFile(__dirname + '/public/foundItem.html');
});

// Route for the lostItem form
app.get('/lostItem', (req, res) => {
  res.sendFile(__dirname + '/public/lostItem.html');
});

// Route for submitting the foundItem form
app.post('/foundItem', upload.single('image'), (req, res) => {
  const { name, description } = req.body;

  const newFoundItem = new FoundItem({
    name,
    description,
    image: {
      data: req.file.buffer,
      contentType: req.file.mimetype,
      path: req.file.filename
    }
  });

  newFoundItem.save()
    .then(() => {
      console.log('Found item saved successfully');
      res.send('Found item saved successfully');
    })
    .catch((err) => {
      console.error('Error saving found item:', err);
      res.status(500).send('Error saving found item');
    });
});

// Route for submitting the lostItem form
app.post('/lostItem', upload.single('image'), (req, res) => {
  const { name, description } = req.body;
  let image = null;

  if (req.file) {
    image = {
      data: req.file.buffer,
      contentType: req.file.mimetype,
      path: req.file.filename
    };
  }

  const newLostItem = new LostItem({
    name,
    description,
    image
  });

  newLostItem.save()
    .then(() => {
      console.log('Lost item saved successfully');
      res.send('Lost item saved successfully');
    })
    .catch((err) => {
      console.error('Error saving lost item:', err);
      res.status(500).send('Error saving lost item');
    });
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
