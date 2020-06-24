import React, { useState } from 'react';

//import connect
import { connect } from 'react-redux';

//import action types
import { searchForTerm } from '../actions';

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
        <div>
            <p>{props.test}</p>
            <form onSubmit={submitSearch}>
                <label htmlFor='searchTerm'>
                    Search by keyword, title, or author
                    <input 
                        type='text'
                        placeholder='enter search term...'
                        name='searchTerm'
                        id='searchTerm'
                        value={formState.searchTerm}
                        onChange={handleChanges}
                    />
                </label>
                <label htmlFor='resultsAmount'>
                    Number of Results
                    <input
                        type='number'
                        name='resultsAmount'
                        id='resultsAmount'
                        min='0'
                        max='100'
                        placeholder='Number 0 - 100'
                        value={formState.resultsAmount}
                        onChange={handleChanges}
                    />
                </label>
                <button>Search</button>
            </form>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        test: state.test
    }
};

const mapDispatchToProps = {searchForTerm};

export default connect(mapStateToProps, mapDispatchToProps)(Search);