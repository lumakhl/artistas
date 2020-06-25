import React, { Component } from 'react';
import ArtistBio from './ArtistBio';
import { ArtistInfo } from './ArtistInfo';
import Albums from '../albums/Albums';
import RelatedArtists from '../related/RelatedArtists';

import { connect } from 'react-redux';

import './Artist.css';

export class Artist extends Component {
    componentDidMount() {
        this.props.onLoadingArtist('Lil Wayne');
    }

    render() {
        const { picture_big, name, bio, info } = this.props.artist;

        return (
            <div className='artist-page'>
                <img className='img-artist' alt='artist cover' src={picture_big}></img>
                <div className='artist'>
                    <ArtistBio bio={bio} name={name}></ArtistBio>
                    <div className='artist-info'>
                        {info && info.map(info => (
                            <ArtistInfo key={info.title} artistInfo={info}></ArtistInfo>
                        ))}
                    </div>
                </div>
                <div className="artist-albums-info">
                    <Albums></Albums>
                    <RelatedArtists></RelatedArtists>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    artist: state.artist
});

const mapToDispachToProps = dispatch => {
    return {
        onLoadingArtist: (artist) => dispatch({ type: 'GET_ARTIST_ASYNC', artist: artist })
    };
}

export default connect(
    mapStateToProps,
    mapToDispachToProps
)(Artist)

