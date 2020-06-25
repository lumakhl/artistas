import {
    GET_ALBUM,
    SET_LOADING_ALBUM,
    ERROR_ALBUM
} from '../actions/types';

const initialState = {
    albums: [],
    comments: null,
    loading: false,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALBUM:
            return {
                ...state,
                loading: false,
                error: null,
                albums: [...state.albums, {...action.payload}]
            };
        case SET_LOADING_ALBUM:
            return {
                ...state,
                loading: true,
                error: null
            };
        case ERROR_ALBUM:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;

    }

}