import React from 'react';
import QuoteList from './components/QuoteList';
import SearchBar from './components/SearchBar';
import AuthorList from './components/AuthorsList';
import NewQuote from './components/NewQuote';

// Import other components as needed

function App() {
  return (
    <div className="App">
      <QuoteList />
      <SearchBar/>
      <NewQuote/>
      <AuthorList/>
      
    </div>
  );
}

export default App;
