const fetch = require("isomorphic-fetch");

module.exports = class ApiDriver {

    constructor({ host } = { host: "" }) {
        this.host = host || API_HOST;
    }

    getApiHost() {
        return this.host;
    }

    getApiFullPath() {
        return 'https://' + this.getApiHost();
    }

    getToken() {
        try {
            if (localStorage)
                return localStorage.getItem('token') || '';
            return JSON.parse(fs.readFileSync("~/.okkoala/credentials").toString()).token;
        } catch (e) {
            return "";
        }
    }

    sendPost({ endpoint, data }) {
        return this.post({
            endpoint: this.getApiFullPath() + endpoint,
            authorization: this.getToken(),
            data: data,
        });
    }

    sendPut({ endpoint, data }) {
        return this.put({
            endpoint: this.getApiFullPath() + endpoint,
            authorization: this.getToken(),
            data: data,
        });
    }

    sendGet({ endpoint }) {
        return this.get({
            endpoint: this.getApiFullPath() + endpoint,
            authorization: this.getToken(),
        });
    }

    sendDelete({ endpoint, data }) {
        return this.delete({
            endpoint: this.getApiFullPath() + endpoint,
            authorization: this.getToken(),
            data: data
        });
    }

    get({ endpoint, authorization }) {
        let headers = {
            'Content-Type': 'application/json'
        };
        if (authorization) headers.Authorization = authorization;
        return fetch(endpoint, {
            method: 'GET',
            headers: headers,
            credentials: 'include',
            mode: 'cors'
        }).then(x => this.checkStatus(x)).then(y => this.parseJSON(y));
    }

    post({ endpoint, data = {}, authorization, headers = {} }) {
        if (!headers["Content-Type"]) {
            headers["Content-Type"] = 'application/json';
        }
        if (authorization) headers.Authorization = authorization;
        return fetch(endpoint, {
            method: 'POST',
            headers: headers,
            credentials: 'include',
            mode: 'cors',
            body: JSON.stringify(data),
        }).then(x => this.checkStatus(x)).then(y => this.parseJSON(y));
    }

    put({ endpoint, data = {}, authorization, headers = {} }) {
        if (!headers["Content-Type"]) {
            headers["Content-Type"] = 'application/json';
        }
        if (authorization) headers.Authorization = authorization;
        return fetch(endpoint, {
            method: 'PUT',
            headers: headers,
            credentials: 'include',
            body: JSON.stringify(data),
            mode: 'cors'
        }).then(x => this.checkStatus(x)).then(y => this.parseJSON(y));
    };

    delete({ endpoint, data = {}, authorization }) {
        let headers = {
            'Content-Type': 'application/json'
        };
        if (authorization) headers.Authorization = authorization;
        return fetch(endpoint, {
            method: 'DELETE',
            headers: headers,
            credentials: 'include',
            body: JSON.stringify(data),
            mode: 'cors'
        }).then(x => this.checkStatus(x)).then(y => this.parseJSON(y));
    }

    upload({ endpoint, file, type }) {
        return fetch(endpoint, {
            method: 'PUT',
            body: file,
            headers: {
                'Content-Type': file.type != '' ? file.type : (type || 'application/octet-stream')
            }
        }).then(x => this.checkStatus(x))
    }

    download({ endpoint, headers }) {
        return fetch(endpoint, {
            method: "GET",
            headers,
        }).then(x => this.checkStatus(x))
    }

    checkStatus(response) {
        if (!response) return;
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else this.onStatus(response.status, response);
    }

    onStatus(status, response) {
        if (status >= 400 & status < 500) {
            console.warn(status, response.statusText);
        } else if (status >= 500 && status < 600) {
            var error = new Error(response.statusText || response.status)
            error.response = response;
            throw error;
        }
    }

    async parseJSON(response) {
        try {
            if (response && response.json)
                return await response.json();
        } catch (e) {
            return response;
        }
    }
}