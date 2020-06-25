import React from 'react';
import './ArtistBio.css';

const ArtistBio = ({ name, bio }) => {
    return (
        <div className='artist-bio'>
            <h3>{name}</h3>
            <span>{bio}</span>
        </div>
    )
}

export default ArtistBio
