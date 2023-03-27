const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

async function startMongoDb() {
  await mongoose.connect(process.env.DB_URL, {
    dbName: 'test',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000
  }).catch(err => {
    console.error(err.reason);
  });
}

module.exports = startMongoDb;