const fetch = require('node-fetch');

fetch('http://example.com/movies.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(JSON.stringify(myJson));
    })
    .catch(error => console.error(error))