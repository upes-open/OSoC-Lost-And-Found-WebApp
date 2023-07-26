const mongoose = require('mongoose');

const collectedItemSchema = new mongoose.Schema({
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
  name: String,
  email: String,
  sapId: String,
  branch: String,
  year: String,
  contactNumber: String,
}, { collection: 'collecteditems' }); // Replace 'collecteditems' with your desired collection name

const CollectedItem = mongoose.model('CollectedItem', collectedItemSchema);

module.exports = CollectedItem;
