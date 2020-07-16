import React from 'react';
import './App.css';

//import styled components
import styled from 'styled-components';

//import thunk
import thunk from 'redux-thunk';

//import createStore and applyMiddleware
import { createStore, applyMiddleware } from 'redux';

//import connect
import { connect } from 'react-redux';

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
  font-family: ${props => props.app ? "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" : null};
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

const P = styled.p`
  padding: 10px;
  margin: 5px;
  text-align: ${props => props.error || props.number ? "center" : "left"};
`

//create store
export const store = createStore(reducer, applyMiddleware(thunk));

function App(props) {
  console.log("props in App", props);
  return (
    <Div className="App" app>
      <h1>Welcome to the Book Page</h1>
      <P>Find a collection of works based on author, keyword, or title!</P>
      <Search />
      {/* is result an array?           is result not an empty array?      result is not an empty array          empty     result is not an array  */}
      {Array.isArray(props.results) ? (props.results.length !== 0 ? <P>{props.results.length} results found</P> : null) : <P>1 result found</P>}
      <CardList />
    </Div>
  );
};

const mapStateToProps = state => {
  return {
    results: state.results
  }
}

export default connect(mapStateToProps, {})(App);
