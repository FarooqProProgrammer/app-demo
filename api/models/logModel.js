const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  timestamp: Date,
  level: String,
  message: String,
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;
