const { MongoClient, ObjectId } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://admin:helloadmin@lost-and-found.mczrz51.mongodb.net/LostandFound?retryWrites=true&w=majority';

// Database Name
const dbName = 'LostandFound';

// Claim the found item and move it to the 'collectedItem' collection
// async function claimFoundItem(itemId) {
//   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//   try {
//     // Connect to the MongoDB server
//     await client.connect();

//     // Get a reference to the database
//     const db = client.db(dbName);

//     // Find the item in the 'foundItem' collection
//     const foundItem = await db.collection('foundItem').findOne({ _id: new ObjectId(2) });

//     if (foundItem) {
//       // Insert the found item into the 'collectedItem' collection
//       await db.collection('collectedItem').insertOne(foundItem);

//       // Remove the item from the 'foundItem' collection
//       await db.collection('foundItem').deleteOne({ _id: new ObjectId(2) });

//       console.log('Item claimed successfully.');
//     } else {
//       console.log('Item not found.');
//     }
//   } catch (error) {
//     console.error('Error occurred:', error);
//   } finally {
//     // Close the connection
//     client.close();
//   }
// }

// //Enter Found Item ID here
// claimFoundItem('');



async function getLostItems() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to the MongoDB server
    await client.connect();

    // Get a reference to the database
    const db = client.db(dbName);

    // fetch all items from the 'lostItem' collection
    const lostItems = await db.collection('lostItem').find({}).toArray();
    // console.log(lostItems);
    if (lostItems) {
      return lostItems
    }
  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    // Close the connection
    client.close();
  }
}

module.exports = {  getLostItems };