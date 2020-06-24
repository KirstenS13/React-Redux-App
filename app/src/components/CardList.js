import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const CardList = props => {
    return (
        <div>
            {props.results.map(result => {
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
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        results: state.results
    }
}

export default connect(mapStateToProps, {})(CardList);