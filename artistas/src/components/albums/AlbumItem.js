import React from 'react';
import Songs from '../songs/Songs';
import './AlbumItem.css';
import ButtonAcessAlbum from '../layout/ButtonAcessAlbum';


const AlbumItem = ({ album }) => {

    const { title, cover_xl, cover_small, notes, tracks, link } = album;

    return (
        <div className="album">
            <div className='album-info'>
                <div className='album-basic-info'>
                    <div className='album-basic'>
                        <img src={cover_xl} alt='album cover' className='img-album' />
                        <span className='album-title'>{title}</span>
                    </div>
                    <span className='song-count'>{tracks.data.length} Songs</span>
                </div>
                {notes && (
                    <div className='editors-note'>
                        <span className='text-bold'>EDITORS' NOTES</span>
                        <span>{notes}</span>
                    </div>
                )}
            </div>
            <div className='songs'>
                <ButtonAcessAlbum link={link} />
                <Songs songs={tracks.data} img={cover_small} artist={album.artist.name} />
            </div>
        </div>
    )
}

export default AlbumItem
