import React, { Component } from 'react'
import AlbumItem from './AlbumItem';
import { connect } from 'react-redux';

export class Albums extends Component {

    render() {
        const { albums } = this.props.album;
        return (
            <div style={albumStyle}>
                {albums.map(album => (
                    <AlbumItem key={album.id} album={album}></AlbumItem>
                ))}
            </div>
        )
    }
}

const albumStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
};

const mapStateToProps = state => ({
    album: state.album
});

export default connect(
    mapStateToProps)(Albums)
