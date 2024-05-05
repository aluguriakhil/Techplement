const mongoose = require('mongoose');

// Define the schema for the quotes
const quoteSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

// Create the Quote model based on the schema
const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
