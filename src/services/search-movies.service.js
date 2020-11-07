import HttpService from "./http.service";


class SearchMoviesService {
    constructor() {
        this.httpService = new HttpService();
    }

    getMovie(endpoint, params) {
        return this.httpService.get(endpoint, params);
    }

    getAllMovies(endpoint) {
        return this.httpService.get(endpoint, []);
    }

    getCharacter(endpoint, params, cache, useApiBaseUrl) {
        return this.httpService.get(endpoint, [], cache, useApiBaseUrl);
    }

    getAllCharacters(endpoint) {
        return this.httpService.get(endpoint, [], true);
    }
}

export default SearchMoviesService;
