import React from "react";

import './MovieInfo.css';

const MovieInfo = (props) => {
    const {icon, text, type} = props;

    return (
        <div className="Movie-info">
            <img className="Icon" src={icon} alt="Icon"/>
            <div className={`Text ${type ? 'Text-' + type : ''}`}>{text}</div>
        </div>
    );
};

export default MovieInfo;
