var express = require('express');
var router = express.Router();

var model = {
    title: "Site with a simple jokes api",
    howToUse: "Get i random joke by using this: /api/random"
}
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', model);
});

//EJS eksempel
< !DOCTYPE html >
    <html>
        <head>
            <title><%= title %></title>
            <link rel='stylesheet' href='/stylesheets/style.css' />
        </head>
        <body>
            <h1><%= title %></h1>
            <p>Welcome to <%= title %></p>
            <a href="./addjoke">klik for til tilføje en joke</a>
        </body>
    </html>