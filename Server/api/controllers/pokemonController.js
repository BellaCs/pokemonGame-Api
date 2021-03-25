var pokemonFormatter = require("../getFormatter/pokemonFormatter.socket");

exports.read_pokemon_for_client = function (req, res) {
    pokemonFormatter.getPokemonByIdToClient(req.params.pokemonId, pokemon => {
        if (pokemon != undefined) {
            res.json(pokemon);
        } else {
            res.sendStatus(404);
        }
        return;
    });


};

exports.read_pokemon_for_client_oponent = function(req, res) {
    pokemonFormatter.getPokemonByIdToClientOponent(req.params.pokemonId, pokemon => {
        if (pokemon != undefined) {
            res.json(pokemon);
        } else {
            res.sendStatus(404);
        }
        return;
    });
}
