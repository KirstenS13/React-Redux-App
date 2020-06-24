import React, { useState } from 'react';

//import connect
import { connect } from 'react-redux';

//import action types
import { searchForTerm } from '../actions';

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState();

    const handleChanges = e => {
        setSearchTerm(e.target.value);
        console.log("typing");
    };

    const submitSearchTerm = e => {
        e.preventDefault();
        props.searchForTerm(searchTerm);
        setSearchTerm("");
        console.log("submitted!!!");
    }

    return (
        <div>
            <p>{props.test}</p>
            <form onSubmit={submitSearchTerm}>
                <label htmlFor='work-search'>
                    Search by keyword, title, or author
                    <input 
                        type='text'
                        placeholder='enter search term...'
                        name='work-search'
                        id='work-search'
                        value={searchTerm}
                        onChange={handleChanges}
                    />
                </label>
                <button>Search</button>
                <p>Search Term: {searchTerm}</p>
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