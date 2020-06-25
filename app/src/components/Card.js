import React from 'react';

import styled from 'styled-components';

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

const P = styled.p`
  padding: 10px;
  margin: 5px;
  text-align: ${props => props.error ? "center" : "left"};
`

const Card = props => {
    return (
        <Div card>
            <Div info>
                <h2 className="heading">Title: </h2>
                <h2>{props.title}</h2>
            </Div>
            <Div info>
                <h4 className="heading">Author: </h4>
                <h4>{props.author}</h4>
            </Div>
            <Div info>
                <h5 className="heading">Release Date: </h5>
                <h5>{props.releaseDate}</h5>
            </Div>
            {props.review ? 
                <>
                    <h5 className="heading">Review: </h5>
                    <P>{props.review}</P>
                </> : 
                null
            }
            {props.description ? 
                <>
                    <h5 className="heading">Description: </h5>
                    <P>{props.description}</P>
                </> : 
                null
            }
            {props.authorBio ? 
                <>
                    <h5 className="heading">Author's Bio: </h5>
                    <P>{props.authorBio}</P>
                </> : 
                null
            }
        </Div>
    )
}

export default Card;