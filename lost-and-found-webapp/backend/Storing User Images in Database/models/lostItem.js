const mongoose = require('mongoose');

const lostItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: {
    data: Buffer,
    contentType: String,
    path: String
  }
}, {
  collection: 'lostItem' // Collection name for lost items
});

const LostItem = mongoose.model('LostItem', lostItemSchema);

module.exports = LostItem;
