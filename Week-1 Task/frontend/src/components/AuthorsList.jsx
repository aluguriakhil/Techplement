import React, { useState, useEffect } from 'react';
import { getAllQuotes } from '../services/api';

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const quotes = await getAllQuotes();
        const authorSet = new Set(quotes.map(quote => quote.author));
        setAuthors([...authorSet]);
      } catch (error) {
        console.error('Error fetching authors:', error);
      }
    };
    fetchAuthors();
  }, []);

  return (
    <div className="m-4 md:m-8 lg:m-12 xl:m-16">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-white">Authors</h2>
      <div className="flex flex-wrap gap-2">
        {authors.map((author, index) => (
          <div key={index} className="bg-blue-100/25 px-4 py-2 rounded-md text-white">
            {author}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorList;
