import axios from 'axios';

const api = {
    searchArtist: (name) => {
        return axios.get(`https://api.deezer.com/search/artist/?q=${name}&index=0&limit=1`);
    },

    fetchArtist: (id) => {
        return axios.get(`https://api.deezer.com/artist/${id}`);
    },

    fetchRelatedArtist: (id) => {
        return axios.get(`https://api.deezer.com/artist/${id}/related`);
    },

    fetchAlbums: (id) => {
        return axios.get(`https://api.deezer.com/artist/${id}/albums`);
    },

    fetchAlbumsInfo: (id) => {
        return axios.get(`https://api.deezer.com/album/${id}`);
    },

    fetchAlbumsComments: (id) => {
        return axios.get(`https://api.deezer.com/album/${id}/comments`);
    },

    fetchArtistBio: (name) => {
        // A key da api foi deixada aqui para vocês conseguirem testar
        const key = 'e54cc5c0d65e7ede75532a39770f2fee';

        return axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Lil%27+Wayne&api_key=${key}&format=json`)
    }
}

export default api;