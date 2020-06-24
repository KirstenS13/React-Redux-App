import React from 'react';
import './App.css';

//import styled components
import styled from 'styled-components';

//import thunk
import thunk from 'redux-thunk';

//import createStore and applyMiddleware
import { createStore, applyMiddleware } from 'redux';

//import reducer
import { reducer } from './reducers';

//import components
import Search from './components/Search';
import CardList from './components/CardList';

//styles
const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 50px 0;
  margin: 50px auto;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-family: ${props => props.app ? "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" : null};
  background-color: #011936;
  color: #57CC99;
  border: 2px solid #57CC99;
  border-radius: 5px;
`

//create store
export const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Div className="App" app>
      <h1>Welcome to the Author Page</h1>
      <p>Find a collection of works based on author, keyword, or title!</p>
      <Search />
      <CardList />
    </Div>
  );
};

export default App;
