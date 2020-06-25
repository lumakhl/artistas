import { put, call, takeLatest } from 'redux-saga/effects';
import api from '../services/';
import { GET_ARTIST, GET_ALBUM, GET_RELATED_ARTISTS } from '../actions/types';

function* getRelatedArtist(artist) {
    const res = yield call(api.fetchRelatedArtist, artist.id);
    yield put({ type: GET_RELATED_ARTISTS, payload: res.data.data });

}

function* getAlbums(artist) {
    const res = yield call(api.fetchAlbums, artist.id);

    for (let i = 0; i < res.data.data.length; i++) {
        const album = yield call(api.fetchAlbumsInfo, res.data.data[i].id);
        yield put({ type: GET_ALBUM, payload: album.data });
    }
    yield put({ type: 'GET_RELATED_ARTIST_SAGAS', id: artist.id })
}

function* getArtistIdAsync(action) {
    const res = yield call(api.searchArtist, action.artist);
    const artist = res.data.data[0];
    yield put({ type: 'GET_ARTIST_BIO', action: artist })
    yield put({ type: 'GET_ALBUMS', id: artist.id });
}

function* getArtistBio(artist) {
    const res = yield call(api.fetchArtistBio, artist.name);
    artist.action.bio = res.data.artist.bio.summary;

    artist.action.info = infos(res);

    yield put({ type: GET_ARTIST, payload: artist.action });
}

const infos = (res) => {
    var regex = /\(.+\)/;
    const bio = res.data.artist.bio.summary;
    const info = bio.match(regex);
    const infos = info[0].split('in');
    const born = infos[0].replace('born', '').replace('(', '');
    const local = infos[1].split(',')[0];
    const genre = `${res.data.artist.tags.tag[0].name}`;

    return [
        {
            title: 'Origin',
            info: local
        },
        {
            title: 'Genre',
            info: genre

        },
        {
            title: 'Born',
            info: born
        },

    ];
}

export default function* rootSaga() {
    yield takeLatest('GET_ARTIST_ASYNC', getArtistIdAsync)
    yield takeLatest('GET_ALBUMS', getAlbums)
    yield takeLatest('GET_RELATED_ARTIST_SAGAS', getRelatedArtist)
    yield takeLatest('GET_ARTIST_BIO', getArtistBio)
}
