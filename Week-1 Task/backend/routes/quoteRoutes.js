const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

// Route for getting all quotes
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find(); // Retrieve all quotes from MongoDB
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Route for adding a new quote
router.post('/', async (req, res) => {
  const { text, author } = req.body; // Extract text and author from request body
  const newQuote = new Quote({ text, author }); // Create a new quote document

  try {
    const savedQuote = await newQuote.save(); // Save the new quote to MongoDB
    res.status(201).json(savedQuote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route for getting quotes by author name
router.get('/:name', async (req, res) => {
  const authorName = req.params.name;

  try {
    const quotesByAuthor = await Quote.find({ author: authorName });
    res.json(quotesByAuthor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
