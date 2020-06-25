import {
    GET_ARTIST,
    SET_LOADING_ARTIST,
    ERROR_ARTIST
} from '../actions/types'

const initialState = {
    id: null,
    name: null,
    picture_big: null,
    bio: null,
    info: [],
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_ARTIST:
            return {
                ...state,
                loading: false,
                error: null,
                ...action.payload
            };

        case SET_LOADING_ARTIST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case ERROR_ARTIST:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
