import React, { useState } from 'react';
import axios from 'axios';

const NewQuote = () => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const quoteData = { author, text };
    try {
      const response = await axios.post('http://localhost:5000/quotes', quoteData);
      console.log('New quote added:', response.data);
      // Clear the form
      setAuthor('');
      setText('');
      // Show alert
      window.alert('Quotation added successfully!');
    } catch (error) {
      console.error('Error adding new quote:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 px-4 sm:px-6 lg:px-8 py-6 bg-gray-500/50 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-white">Add a New Quote</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-white">Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-white">Quote:</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
        >
          Add Quote
        </button>
      </form>
    </div>
  );
};

export default NewQuote;
