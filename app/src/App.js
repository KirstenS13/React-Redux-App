import React from 'react';
import './App.css';

import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Author Page</h1>
      <p>Find a collection of works based on author, keyword, or title!</p>
      <Search />
    </div>
  );
}

export default App;
