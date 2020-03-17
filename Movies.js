import React from 'react';
import Ratings from './Ratings/ratings';
import style from './movie.module.css';

const Movie = ({image, title, rating, release, summary}) => {
    return(
        <div className={style.movie}>
            <img className="image" src={'https://image.tmdb.org/t/p/w300/'+image} alt="movie poster"/><br />
            <h3>{title}</h3>
            <p>{rating}</p>
            <p><b>Release Date:</b> {release}</p>
            <p>{summary}</p>
        </div>
    );
}

export default Movie;