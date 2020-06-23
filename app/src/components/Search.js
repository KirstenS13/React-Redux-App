import React from 'react';

//import connect
import { connect } from 'react-redux';

const Search = (props) => {
    return (
        <div>
            <p>{props.test}</p>
            <form>
                <label htmlFor='work-search'>
                    Search by keyword, title, or author
                    <input 
                        type='text'
                        placeholder='enter search term...'
                        name='work-search'
                        id='work-search'
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

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Search);