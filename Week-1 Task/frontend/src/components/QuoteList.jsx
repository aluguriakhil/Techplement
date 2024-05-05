import React, { useState, useEffect } from 'react';
import { getAllQuotes } from '../services/api';

const QuoteList = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const data = await getAllQuotes();
        setQuote(data[Math.floor(Math.random() * data.length)]);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };
    fetchQuotes();
    const intervalId = setInterval(fetchQuotes, 5000); // Fetch a new quote every 5 seconds

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-purple-200 via-purple-400 to-purple-600/110">
      <div className="bg-white p-6 sm:p-10 md:p-12 lg:p-16 xl:p-20 rounded-lg shadow-lg mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24 w-full max-w-screen-lg">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-blue-800 mb-6">
          Quote of the Moment
        </h2>
        <div className="m-6">
          {quote && (
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center text-blue-900">
              "{quote.text}" - {quote.author}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteList;
