import React, { useState } from 'react';

//import styled components
import styled from 'styled-components';

//import connect
import { connect } from 'react-redux';

//import action types
import { searchForTerm } from '../actions';

//styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: auto;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`

const Input = styled.input`
    border: 1px solid #57CC99;
    color: #FCBF49;
    border-radius: 5px;
    background-color: transparent;
`

const Button = styled.button`
    padding: 0.5rem 2rem;
    margin: 5px;
    background-color: transparent;
    border: 2px solid #57CC99;
    border-radius: 5px;
    color: #FCBF49;
`

const Search = (props) => {
    const [formState, setFormState] = useState({
        searchTerm: "",
        resultsAmount: ""
    });

    const handleChanges = e => {
        setFormState({...formState, [e.target.name]: e.target.value});
        console.log("typing");
    };

    const submitSearch = e => {
        e.preventDefault();
        props.searchForTerm(formState);
        setFormState({searchTerm: "", resultsAmount: ""});
        console.log("submitted!!!");
    }

    return (
        <Form onSubmit={submitSearch}>
            <label htmlFor='searchTerm'>Search by keyword, title, or author</label>
            <Input 
                type='text'
                placeholder='Enter search term...'
                name='searchTerm'
                id='searchTerm'
                value={formState.searchTerm}
                onChange={handleChanges}
            />
            <label htmlFor='resultsAmount'>Number of Results</label>
            <Input
                type='number'
                name='resultsAmount'
                id='resultsAmount'
                min='0'
                max='100'
                placeholder='Number 0 - 100'
                value={formState.resultsAmount}
                onChange={handleChanges}
            />
            <Button>Search</Button>
        </Form>
    )
};

const mapStateToProps = state => {
    return {
        test: state.test
    }
};

const mapDispatchToProps = {searchForTerm};

export default connect(mapStateToProps, mapDispatchToProps)(Search);