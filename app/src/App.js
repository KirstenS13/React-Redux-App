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
  flex-direction: ${props => props.info ? "row" : "column"};
  width: ${props => props.info ? "100%" : "80%"};
  padding: ${props => {
      if (props.info) {
          return "5px 0";
      } else if (props.app) {
          return "50px 0";
      } else if (props.card) {
          return "5px 15px";
      } else {
          return "25px 0";
      }
  }};
  margin: ${props => {
      if (props.info) {
          return "5px auto";
      } else if (props.app) {
          return "50px auto";
      } else {
          return "25px auto";
      }
  }};
  justify-content: ${props => props.app ? "center" : "space-between" };
  align-items: ${props => props.app ? "center" : null};
  box-sizing: border-box;
  font-family: ${props => props.app ? "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" : null};
  background-color: #011936;
  color: white;
  border: ${props => {
      if (props.app) {
        return "2px solid #57CC99";
      } else if (props.card) {
          return "2px solid #57CC99";
      } else {
          return "none";
      }}};
  border-radius: ${props => (props.app || props.card) ? "5px" : "none"};
`

//create store
export const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Div className="App" app>
      <h1>Welcome to the Book Page</h1>
      <p>Find a collection of works based on author, keyword, or title!</p>
      <Search />
      <CardList />
    </Div>
  );
};

export default App;
