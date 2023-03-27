const startMongoDb =  require('./mongoDb');

class Loaders {
  start() {
    startMongoDb();
  }
}

module.exports = new Loaders();