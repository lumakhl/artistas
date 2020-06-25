import React from 'react';
import './layout.css';

const ButtonAcessAlbum = (url) => {

    const { link } = url;
    return (
        <a className='button-style' href={link}>
            <button className='font-color'>Listen on <span className='apple-text'>Deezer</span>
            </button>
        </a>
    )
}

export default ButtonAcessAlbum
