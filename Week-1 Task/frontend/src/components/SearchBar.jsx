import React, { useState } from 'react';
import { getQuotesByAuthor } from '../services/api';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [quotes, setQuotes] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const data = await getQuotesByAuthor(input);
    setQuotes(data);
  };

  return (
    <>
      <div className="flex items-center justify-center space-x-2">
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search by author name..."
            className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 m-1"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 m-1"
          >
            Search
          </button>
        </form>
      </div>

      {quotes && quotes.map((quote) => (
        <div className='flex justify-center'>
          <div key={quote._id} className="bg-gray-100/50 font-semibold p-6 rounded-md w-full max-w-md m-3">
            <p>"{quote.text}"</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchBar;
