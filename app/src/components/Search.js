import React from 'react';

const Search = () => {
    return (
        <div>
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
            </form>
        </div>
    )
};

export default Search;