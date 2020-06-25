import React, { Component } from 'react'
import RelatedArtistItem from './RelatedArtistItem';
import './RelatedArtists.css';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';

export class RelatedArtists extends Component {
    render() {

        const artists = (start, end) => { return this.props.artist.artists.slice(start, end) };

        return (
            <div className='related-artist'>
                <span className='title-related'>Related Artists</span>
                <div className='related-artists-list'>
                    <MediaQuery query='(min-width: 900px)'>
                        {matches =>
                            matches ?
                                <div className='related-artists-list'>
                                    {artists(0, 7).map(artist => (<RelatedArtistItem key={artist.name} artist={artist}></RelatedArtistItem>))}
                                </div>
                                : <div className='related-artists-list'>
                                    {artists(0, 2).map(artist => (<RelatedArtistItem key={artist.name} artist={artist}></RelatedArtistItem>))}
                                </div>
                        }
                    </MediaQuery>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    artist: state.relatedArtist
});

export default connect(mapStateToProps)(RelatedArtists)
