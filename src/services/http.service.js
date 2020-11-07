import axios from 'axios';

class HttpService {
    apiBaseUrl = "https://swapi.dev/api";
    dataCache = {};

    get(endpoint, params, cache = false, useApiBaseUrl = true) {
        if (this.dataCache[endpoint]) {
            return new Promise((resolve, reject) => {
                resolve(this.dataCache[endpoint]);
            });
        }

        return axios
            .get(`${useApiBaseUrl ? this.apiBaseUrl + '/' : ''}${endpoint}${this.constructParams(params)}`)
            .then(data => {
                if (cache) {
                    this.dataCache[endpoint] = data;
                }

                return data;
            })
            .catch(e => this.handleExceptions(e));
    }

    post(endpoint, params, payload, useApiBaseUrl = true) {
        return axios
            .post(`${useApiBaseUrl ? this.apiBaseUrl + '/' : ''}/${endpoint}/${this.constructParams(params)}`, payload)
            .catch(e => this.handleExceptions(e));
    }

    constructParams(params) {
        let response = '';

        if (params && params.length) {
            params.forEach((param, index) =>
                response += `/${param.name ? param.name + '/' : ''}${param.value}${index === params.length - 1 ? '' : '/'}`
            );
        }

        return response;
    }

    handleExceptions(e) {
        alert('Ooops, the server encountered an error :(');
    }
}

export default HttpService
