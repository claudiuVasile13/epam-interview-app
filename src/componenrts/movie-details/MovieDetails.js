import React from "react";

import './MovieDetails.css';
import MovieInfo from "./movie-info/MovieInfo";

const MovieDetails = (props) => {
    const {title, director, releaseDate, openingCrawl, characters} = props.movieDetails;
    const mergeCharacters = characters ? characters.join(', ') : '';

    return (
        <div className="Movie-details">
            <MovieInfo icon={'/films/film-title.png'} text={title} />
            <MovieInfo icon={'/films/film-summary.png'} text={openingCrawl} type={'small'} />
            <MovieInfo icon={'/films/film-release-date.png'} text={releaseDate} />
            <MovieInfo icon={'/films/film-director.png'} text={director} />
            <MovieInfo icon={'/films/film-cast.png'} text={mergeCharacters} type={'small'} />
        </div>
    );
};

export default MovieDetails;
