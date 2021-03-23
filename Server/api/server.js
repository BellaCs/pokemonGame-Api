var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;

const pokemon = require("./getFormatter/pokemonFormatter.socket"); 

console.log(pokemon);
app.listen(port);

console.log('RESTful API server working on port: ' + port);
