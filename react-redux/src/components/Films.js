import React from 'react';
import { connect } from 'react-redux';
import Film from './Film';
import { getFilms } from '../actions/filmsAction';

const Films = props => {
    return (
        <div>
            <h1>Films</h1>
            {props.films.map((film, index) => (
                <div key={film.id}>
                <Film film = {film} index={index}/> 
                </div>
            ))}
            <button onClick={props.getFilms}>Get Films</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        films: state.films,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { getFilms }
)(Films);