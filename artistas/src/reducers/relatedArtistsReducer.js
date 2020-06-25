import {
    GET_RELATED_ARTISTS,
    SET_LOADING_RELATED_ARTIST,
    ERROR_RELATED_ARTIST
} from '../actions/types';

const initialState = {
    artists: [],
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_RELATED_ARTISTS:
            return {
                ...state,
                loading: false,
                error: null,
                artists: action.payload
            };
        case SET_LOADING_RELATED_ARTIST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case ERROR_RELATED_ARTIST:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
