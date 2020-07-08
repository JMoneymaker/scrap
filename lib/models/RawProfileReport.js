const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  dpsstId: {
    type: String,
    required: true
  },
  html: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('RawProfileReport', schema);
