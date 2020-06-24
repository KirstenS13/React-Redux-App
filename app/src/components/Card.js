import React from 'react';

import styled from 'styled-components';

const P = styled.p`
  padding: 10px;
  margin: 5px;
`

const Card = props => {
    return (
        <div>
            <div className='flexbox'>
                <h2>Title: </h2>
                <h2>{props.title}</h2>
            </div>
            <div className='flexbox'>
                <h4>Author: </h4>
                <h4>{props.author}</h4>
            </div>
            <div className='flexbox'>
                <h5>Release Date: </h5>
                <p>{props.releaseDate}</p>
            </div>
            <h5>Review: </h5>
            <P>{props.review}</P>
            <h5>Description: </h5>
            <P>{props.description}</P>
            <h5>Author's Bio: </h5>
            <P>{props.authorBio}</P>
        </div>
    )
}

export default Card;