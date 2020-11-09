const mongoose = require('mongoose');

require('dotenv').config();

const URI = process.env.ATLAS_URI;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connection established!');
});