import React from 'react';
import './App.css';

//import thunk
import thunk from 'redux-thunk';

//import createStore and applyMiddleware
import { createStore, applyMiddleware } from 'redux';

//import reducer
import { reducer } from './reducers';

//import components
import Search from './components/Search';

//create store
export const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Author Page</h1>
      <p>Find a collection of works based on author, keyword, or title!</p>
      <Search />
    </div>
  );
};

export default App;
