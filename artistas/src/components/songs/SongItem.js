import React, { Component } from 'react';
import './SongItem.css'

export class SongItem extends Component {

    render() {
        const { title, duration } = this.props.song;
        const { img, artist } = this.props;

        const timeConversor = (time) => {
            return new Date(time * 1000).toISOString().substr(14, 5);
        }

        return (
            <div className='item'>
                <div>
                    <img src={img} alt='album cover to song' className='img'></img>
                </div>
                <div className='card'>
                    <div className='song-info'>
                        <span>{title}</span>
                        <span className='text-color-silver'> {artist} </span>
                    </div>
                    <div className='text-color-silver'>
                        <span>{timeConversor(duration)}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default SongItem
