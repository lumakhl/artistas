import { combineReducers } from 'redux';
import albumReducer from './albumsReducer';
import relatedArtistsReducer from './relatedArtistsReducer';
import artistReducer from './artistReducer';

export default combineReducers({
    album: albumReducer,
    relatedArtist: relatedArtistsReducer,
    artist: artistReducer
})