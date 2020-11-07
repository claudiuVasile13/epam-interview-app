import React from "react";

import './App.css';
import Search from "./componenrts/search/Search";
import SearchMoviesService from "./services/search-movies.service";
import MovieDetails from "./componenrts/movie-details/MovieDetails";
import Loading from "./componenrts/elements/loading/Loading";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            movieDetails: {},
            showMovieDetails: null
        };
        this.searchMoviesService = new SearchMoviesService();
    }

    onInputValueChange = (newValue) => {
        this.setState((prevState, props) => (
            {
                inputValue: newValue
            }
        ));
    };

    handleSearchClick = () => {
        if (!this.state.inputValue) {
            alert('The search box can not be empty');
            return;
        }

        this.setState((prevState, props) => (
            {
                showMovieDetails: false
            }
        ));

        this.searchMoviesService
            .getMovie('films', [{name: '', value: this.state.inputValue}])
            .then(movieDetails => {
                if (movieDetails) {
                    this.constructMovieCharactersList(movieDetails);

                    let newMovieDetails = {
                        title: movieDetails.data.title,
                        director: movieDetails.data.director,
                        openingCrawl: movieDetails.data.opening_crawl,
                        releaseDate: movieDetails.data.release_date,
                        characters: []
                    };

                    this.setState((prevState, props) => (
                        {
                            movieDetails: newMovieDetails,
                            showMovieDetails: false,
                            inputValue: ''
                        }
                    ));
                } else {
                    this.toggleShowMovieDetails(null);
                }
            });
    };

    constructMovieCharactersList(movieDetails) {
        if (movieDetails.data && movieDetails.data.characters && movieDetails.data.characters.length) {
            let charactersNames = [];
            let charactersCount = 0;

            movieDetails.data.characters.forEach((character) => {

                this.searchMoviesService
                    .getCharacter(character, [], true, false)
                    .then(characterData => {
                        charactersCount += 1;

                        if (characterData && characterData.data) {
                            charactersNames.push(characterData.data.name);
                        }

                        if (movieDetails.data.characters.length === charactersCount) {

                            let movieDetails = this.state.movieDetails;
                            movieDetails.characters = charactersNames;

                            this.setState((prevState, props) => (
                                {
                                    showMovieDetails: true,
                                    movieDetails: movieDetails
                                }
                            ));

                        }

                    });
            });
        } else {
           this.toggleShowMovieDetails(true);
        }
    }

    toggleShowMovieDetails(show = true) {
        this.setState((prevState, props) => (
            {
                showMovieDetails: show,
            }
        ));
    }

    render() {
        const movieDetailsComp = this.state.showMovieDetails ? <MovieDetails movieDetails={this.state.movieDetails} /> : null;
        const loading = this.state.showMovieDetails === false ? <Loading/> : null;

        return (
            <div className="App">
                <div className="App-main-box">
                    <div className="App-section">
                        <img role="img" src="come-to-the-dark-side-we-have-cookies.jpg" className="App-logo" id="logo" alt="logo"/>
                        <Search
                            inputValue={this.state.inputValue}
                            placeholder="Search for Star Wars movies..."
                            buttonText="Search"
                            onInputValueChange={this.onInputValueChange}
                            handleSearchClick={this.handleSearchClick}
                        />
                    </div>

                    <div className="App-section">
                        {movieDetailsComp}
                        {loading}
                    </div>

                    <img className="Movie-cover" src="/films/film-default-cover.jpg" alt="Cover" />
                </div>
            </div>
        )
    };
}

export default App;

