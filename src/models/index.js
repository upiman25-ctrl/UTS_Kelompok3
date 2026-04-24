const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const config = require('../core/config');
const logger = require('../core/logger')('app');

// Join the database connection string
// Connect directly using Mongoose and pass the DB name in the options
// This bypasses the strict URL parser and allows commas in the string!
mongoose.connect(config.database.connection, {
  dbName: config.database.name,
});

const db = mongoose.connection;
db.once('open', () => {
  logger.info('Successfully connected to MongoDB');
});

const dbExports = {};
dbExports.db = db;

const basename = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const model = require(path.join(__dirname, file))(mongoose);
    dbExports[model.modelName] = model;
    // console.log('Model loaded:', model.modelName);
  });

module.exports = dbExports;
