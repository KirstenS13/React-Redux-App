import React from 'react';

const Card = props => {
    return (
        <div>
            <h2>Title: {props.title}</h2>
            <h4>Author: {props.author}</h4>
            <p>Release Date: {props.releaseDate}</p>
            <h5>Review: </h5>
            <p>{props.review}</p>
            <h5>Description: </h5>
            <p>{props.description}</p>
            <h5>Author's Bio: </h5>
            <p>{props.authorBio}</p>
        </div>
    )
}

export default Card;