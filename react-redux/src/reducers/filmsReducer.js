import {
    FETCH_FILM_START,
    FETCH_FILM_SUCCESS,
    FETCH_FILM_FAILURE
} from '../actions/filmsAction';

const initialState = {
    films: [],
    isFetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILM_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_FILM_SUCCESS:
            return {
                ...state,
                films: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_FILM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;