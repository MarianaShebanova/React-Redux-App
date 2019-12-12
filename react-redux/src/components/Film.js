import React from 'react';

function Film(props) {
    console.log(props.index);
    return <div className={`${props.index % 2 === 0 ? "even" : "odd"}`}>
           <h2>Title: {props.film.title}</h2>
           <h3>Description: {props.film.description}</h3>
           <h3>Director: {props.film.director}</h3>
           <h3>Producer: {props.film.producer}</h3>
           <h3>Release Date: {props.film.release_date}</h3>
        </div>
} 
export default Film;     