import React, { Component } from 'react'
import SongItem from './SongItem';

export class Songs extends Component {
    
    render() {
        const { songs, img, artist } = this.props;
        return (
            <div style={{ flex: 2 }} >
                {songs.map(song => (
                    <SongItem key={song.id} song={song} img={img} artist={artist}></SongItem>
                ))}

            </div>
        )
    }
}

export default Songs
