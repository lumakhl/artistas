import React from 'react';
import './ArtistInfo.css';

export const ArtistInfo = ({ artistInfo }) => {
    const { title, info } = artistInfo;
    return (

        <div className='artist-info-item'>
            <span className='artist-info-title'>{title}</span>
            <span className='artist-info-text'>{info}</span>
        </div>

    )
}
