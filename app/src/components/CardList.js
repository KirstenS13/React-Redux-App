import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

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

const CardList = props => {
    console.log("props.results", props.results);
    return (
        <Div>
            {/* {props.results ? 
                ((typeof props.results === "object") ? 
                    <Card 
                        key={props.results.workid}
                        title={props.results.titleweb}
                        author={props.results.authorweb}
                        releaseDate={props.results.onsaledate}
                        description={props.results.rgcopy}
                        review={props.results.rgabout}
                        authorBio={props.results.rgauthbio}
                    /> : 
                    props.results.map(result => {
                        return (
                            <Card 
                                key={result.workid}
                                title={result.titleweb}
                                author={result.authorweb}
                                releaseDate={result.onsaledate}
                                description={result.rgcopy}
                                review={result.rgabout}
                                authorBio={result.rgauthbio}
                            />
                        )
                    })
                ) :
                <P error>There were no results for that search term. Please try a different term.</P>
            } */}
            {props.results ? 
                (Array.isArray(props.results) === true ?
                     (props.results.length > 0 ?
                        props.results.map(result => {
                            return (
                                <Card 
                                    key={result.workid}
                                    title={result.titleweb}
                                    author={result.authorweb}
                                    releaseDate={result.onsaledate}
                                    description={result.rgcopy}
                                    review={result.rgabout}
                                    authorBio={result.rgauthbio}
                                />
                            )
                        }) :
                            null
                        ) :
                            <Card 
                                key={props.results.workid}
                                title={props.results.titleweb}
                                author={props.results.authorweb}
                                releaseDate={props.results.onsaledate}
                                description={props.results.rgcopy}
                                review={props.results.rgabout}
                                authorBio={props.results.rgauthbio}
                            />
                        ) : 
                <P error>There were no results for that search term. Please try a different term.</P>
            }
        </Div>
    )
}

const mapStateToProps = state => {
    return {
        results: state.results
    }
}

export default connect(mapStateToProps, {})(CardList);