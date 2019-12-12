import axios from 'axios';

export const FETCH_FILM_START = 'FETCH_FILM_START';
export const FETCH_FILM_SUCCESS = 'FETCH_FILM_SUCCESS';
export const FETCH_FILM_FAILURE = 'FETCH_FILM_FAILURE';

export const getFilms = () => dispatch => {
    dispatch({ type: FETCH_FILM_START });
    axios
        .get('https://ghibliapi.herokuapp.com/films/')
        .then(res => {
            dispatch({ type: FETCH_FILM_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_FILM_FAILURE, payload: err.response });
        });
};