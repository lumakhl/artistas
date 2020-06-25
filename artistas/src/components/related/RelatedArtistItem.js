import React from 'react';
import './RelatedArtistsItem.css';

const RelatedArtistItem = ({ artist }) => {
    const { picture, name, genre } = artist;
    return (

        <div className='related-artist-item'>
            <img className='img-relatead-artist' alt='related artist cover' src={picture}></img>
            <span>{name}</span>
            <span className='title-genre'>{genre}</span>
        </div>

    )
}

export default RelatedArtistItem
