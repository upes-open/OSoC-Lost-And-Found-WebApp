const mongoose = require('mongoose');

const foundItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: {
    data: Buffer,
    contentType: String,
    path: String
  }
}, {
  collection: 'foundItem' // Collection name for found items
});

const FoundItem = mongoose.model('FoundItem', foundItemSchema);

module.exports = FoundItem;
